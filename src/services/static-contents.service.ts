import { Repository, Not, IsNull } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { StaticContent } from "@entities/staticContents.entity";
import {
  StaticContentDto,
  PagesOfStaticContent,
} from "@dtos/staticContents.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

export class StaticContentsService {
  private db: Repository<StaticContent>;

  constructor() {
    this.connect();
  }

  async connect() {
    const database = await connection.db;

    this.db = database.getRepository(StaticContent);
  }

  async getById(id: string) {
    const content = await this.db.findOne(id);

    if (!content) throw Boom.notFound("The static content was not found");

    return content;
  }

  async getAll(limit: string | undefined, offset: string | undefined) {
    const options = convertQueryParamsInOptions(limit, offset);

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

  async update(id: string, payload: Partial<StaticContentDto>) {
    const data = await this.getById(id);

    await this.db.update(data.id, payload);

    return { ...data, ...payload };
  }

  async delete(id: string) {
    const data = await this.getById(id);

    await this.db.delete(data.id);

    return "Removed successfully";
  }
}
