import { FindManyOptions, Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { Image } from "@entities/image.entity";
import { ImageDto } from "@dtos/image.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

export class ImageService {
  private db: Repository<Image>;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Image);
  }

  private getResolutionBySize(size: string) {
    const [width, height] = size.split("x");

    let resolution: string | number =
      parseInt(width, 10) / parseInt(height, 10);

    resolution = resolution.toFixed(4);

    return resolution;
  }

  async getById(id: string) {
    const image = await this.db.findOne(id);

    if (!image) throw Boom.notFound("This image is not exist in this database");

    return image;
  }

  async getAll(limit: string | undefined, offset: string | undefined) {
    const options = convertQueryParamsInOptions(limit, offset);

    const images = await this.db.find(options);

    return images;
  }

  async create(imageDto: ImageDto) {
    const newImage = await this.db.create(imageDto);

    newImage.resolution = this.getResolutionBySize(newImage.size);

    return await this.db.save(newImage);
  }

  async update(id: string, imageDto: Partial<ImageDto>) {
    const image = await this.getById(id);

    let changes: any = { ...imageDto };

    if (imageDto.size) {
      changes = {
        ...imageDto,
        resolution: this.getResolutionBySize(imageDto.size),
      };
    }

    await this.db.update(image.id, changes);

    return {};
  }

  async delete(id: string) {
    await this.getById(id);
    await this.db.delete(id);

    return `This image with for ID ${id} was deleted`;
  }
}
