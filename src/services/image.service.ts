import fileUpload from "express-fileupload";

import { FindManyOptions, Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { Image } from "@entities/image.entity";
import { ImageDto } from "@dtos/image.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

import { uploadStorage, getUriFromFile } from "@firebase/upload-storage";

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

  async getByMd5(md5: string) {
    const image = await this.db.findOne({ md5 });

    if (!image) throw Boom.notFound("This image is not exist in this database");

    return image;
  }

  async getAll(limit: string | undefined, offset: string | undefined) {
    const options = convertQueryParamsInOptions(limit, offset);

    const images = await this.db.find(options);

    return images;
  }

  async create(
    imageDto: ImageDto,
    file: fileUpload.UploadedFile | fileUpload.UploadedFile[]
  ) {
    if (!file) throw Boom.notAcceptable("The image? 🤨");

    if (Array.isArray(file)) {
      throw Boom.notAcceptable("The image is only one 👀");
    }

    const blob: Buffer = file.data;
    const name: string = file.md5;

    const existImage = await this.db.findOne({ md5: name });

    if (existImage)
      throw Boom.conflict(
        "This image already exist, the ID is " + existImage.id
      );

    await uploadStorage(name, blob);
    const Uri = await getUriFromFile(name);

    const newImage = await this.db.create(imageDto);

    newImage.imageUrl = Uri;
    newImage.resolution = this.getResolutionBySize(newImage.size);
    newImage.md5 = name;

    return await this.db.save(newImage);
  }

  async delete(id: string) {
    await this.getById(id);
    await this.db.delete(id);

    return `This image with for ID ${id} was deleted`;
  }
}
