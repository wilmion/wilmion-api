import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { Tag } from "@entities/tag.entity";

import { TagDto } from "@dtos/tag.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

export class TagsService {
  private db: Repository<Tag>;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Tag);
  }

  async getAll(limit: string, offset: string) {
    const queryParams = convertQueryParamsInOptions<Tag>(limit, offset);

    const tags = await this.db.find({
      ...queryParams,
      relations: ["posts"],
    });

    return tags;
  }

  async getById(id: string) {
    const tag = await this.db.findOne(id, {
      relations: ["posts"],
    });

    if (!tag || !tag.active) throw Boom.notFound("The tag was not found");

    return tag;
  }

  async create(tagDto: TagDto) {
    let tag = await this.db.findOne({ text: tagDto.text });

    if (tag && !tag.active) {
      tag.active = true;
      tag = { ...tag, ...tagDto };

      return await this.db.save(tag);
    }

    const newTag = this.db.create(tagDto);

    return await this.db.save(newTag);
  }

  async update(tagDto: Partial<TagDto>, id: string) {
    const tag = await this.getById(id);

    await this.db.update(tag.id, tagDto);

    return { ...tag, ...tagDto };
  }

  async delete(id: string) {
    const tag = await this.getById(id);

    if (!tag.active) throw Boom.notFound("This tag doesn't exist");

    tag.posts = [];
    tag.active = false;

    return this.db.save(tag);
  }
}
