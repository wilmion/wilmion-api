import { FindManyOptions, Repository, Not, IsNull } from "typeorm";
import Boom from "@hapi/boom";

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
      const data = await this.db.findOne({ contactEmail: Not(IsNull()) });

      return data;
    }

    throw Boom.notFound("This page isn't exist");
  }

  async create(payload: StaticContentDto) {
    if (payload.contactEmail) {
      const contact = await this.getOne("contact");

      if (contact) throw Boom.conflict("The contact page already exist");
    }

    const newStaticContent = await this.db.create(payload);

    return await this.db.save(newStaticContent);
  }

  async update(page: PagesOfStaticContent, payload: Partial<StaticContentDto>) {
    const data = await this.getOne(page);

    return await this.db.merge(data, payload);
  }

  async delete(page: PagesOfStaticContent) {
    const data = await this.getOne(page);

    await this.db.delete(data.id);

    return "Removed successfully";
  }
}
