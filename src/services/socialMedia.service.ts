import { FindManyOptions, Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { SocialMedia } from "@entities/socialMedia.entity";
import { SocialMediaDto } from "@dtos/socialMedia.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

export class SocialMediaService {
  private db: Repository<SocialMedia>;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(SocialMedia);
  }

  async getAll(limit: string, offset: string) {
    const queries = convertQueryParamsInOptions<SocialMedia>(limit, offset);

    const allSocialMedia = await this.db.find({
      ...queries,
      where: {
        active: true,
      },
    });

    return allSocialMedia;
  }

  async getById(id: string) {
    const socialMedia = await this.db.findOne(id);

    if (!socialMedia || !socialMedia.active)
      throw Boom.notFound("This social media doesn't exist ☹️");

    return socialMedia;
  }

  async create(socialMediaDto: SocialMediaDto) {
    let existSocialMedia = await this.db.findOne({ name: socialMediaDto.name });

    if (existSocialMedia && !existSocialMedia.active) {
      existSocialMedia = { ...existSocialMedia, ...socialMediaDto };

      return await this.db.save(existSocialMedia);
    }

    const newSocialMedia = this.db.create(socialMediaDto);

    return await this.db.save(newSocialMedia);
  }

  async update(socialMediaDto: Partial<SocialMediaDto>, id: string) {
    const socialMedia = await this.getById(id);

    return await this.db.update(socialMedia.id, socialMediaDto);
  }

  async delete(id: string) {
    const socialMedia = await this.getById(id);

    socialMedia.active = false;

    return await this.db.save(socialMedia);
  }
}
