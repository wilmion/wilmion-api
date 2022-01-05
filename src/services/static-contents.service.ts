import { FindManyOptions, Repository, Not } from "typeorm";

import { connection } from "@db/connection";

import { StaticContent } from "@entities/staticContents.entity";
import {
  StaticContentDto,
  PagesOfStaticContent,
} from "@dtos/staticContents.dto";

export class StaticContentsService {
  private db: Repository<StaticContent>;

  constructor() {
    this.connect();
  }

  async connect() {
    const database = await connection.db;

    this.db = database.getRepository(StaticContent);
  }

  async getAll(limit: string | undefined, offset: string | undefined) {
    let options: FindManyOptions = {
      take: limit ? parseInt(limit, 10) : 20,
      skip: offset ? parseInt(offset, 10) : 0,
    };

    const staticContents = await this.db.find(options);

    return staticContents;
  }

  async getOne(page: PagesOfStaticContent) {
    if (page === "contact") {
      const data = await this.db.findOne({ contactEmail: Not(null) });

      return data;
    }

    return "Not Found";
  }

  async create(payload: StaticContentDto) {
    await this.db.save(payload);

    return "Static Content created";
  }

  async update(page: PagesOfStaticContent, payload: Partial<StaticContentDto>) {
    const data = await this.getOne(page);

    if (data !== "Not Found") {
      await this.db.merge(data, payload);

      return "Updated data";
    }

    return data;
  }

  async delete(page: PagesOfStaticContent) {
    const data = await this.getOne(page);

    if (data !== "Not Found") {
      await this.db.delete(data.id);

      return "Removed successfully";
    }

    return data;
  }
}
