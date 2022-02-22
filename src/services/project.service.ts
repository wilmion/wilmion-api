import { FindManyOptions, Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { Image } from "@entities/image.entity";
import { ImageDto } from "@dtos/image.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

export class ProjectService {
  private db: Repository<Image>;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Image);
  }
}
