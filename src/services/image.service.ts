import { Repository } from "typeorm";

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

  async getById(id: string) {
    const image = this.db.findOne(id);

    if (!image) throw new Error("This image is not exist in this database");

    return image;
  }
}
