import { Repository, FindManyOptions } from "typeorm";

import { connection } from "@db/connection";

import { Image } from "@entities/image.entity";
import { ImageDto } from "@dtos/image.dto";

export class ImageService {
  private db: Repository<Image>;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Image);
  }

  async getAll(limit: number | undefined, offset: number | undefined) {
    let options: FindManyOptions = {
      take: limit ? limit : 20,
      skip: offset ? offset : 0,
    };

    const images = await this.db.find(options);

    return images;
  }

  async getById(id: string) {
    const image = await this.db.findOne(id);

    if (!image) throw new Error("Image not Found");

    return image;
  }

  async create(payload: ImageDto) {
    const newImage = await this.db.save(payload);

    return newImage;
  }

  async update(id: string, payload: Partial<ImageDto>) {
    const image = await this.getById(id);

    const imageUpdated = await this.db.merge(image, payload);

    return imageUpdated;
  }

  async delete(id: string) {
    const image = await this.getById(id);

    const imageDeleted = await this.db.delete(image.id);

    return imageDeleted;
  }
}
