import { FindManyOptions, Repository } from "typeorm";
import Boom from "@hapi/boom";
import config from "@config/index";

import { connection } from "@db/connection";

import { Stat, TypeStat } from "@entities/stats.entity";
import { Post } from "@entities/post.entity";

import { StatsDto } from "@dtos/stats.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

export class StatService {
  private db: Repository<Stat>;
  private dbPost: Repository<Post>;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Stat);
    this.dbPost = database.getRepository(Post);
  }

  async getAll(limit: string, offset: string, type?: TypeStat) {
    const queries = await convertQueryParamsInOptions<Stat>(limit, offset);

    let query: FindManyOptions<Stat> = {
      ...queries,
      relations: ["post"],
    };

    if (type) {
      query.where = { type };
    }

    const stats = await this.db.find(query);

    return stats;
  }

  async getById(id: string) {
    const stat = await this.db.findOne(id, { relations: ["post"] });

    if (!stat) throw Boom.notFound(`The stat with ID: ${id} doesn't exist`);

    return stat;
  }

  async create(statDto: StatsDto, origin?: string) {
    if (origin) {
      if (!config.hostAllowedList.includes(origin)) {
        throw Boom.forbidden("🤨🤨🤨");
      }
    }

    const newStat = this.db.create(statDto);

    if (statDto.postId) {
      newStat.post = await this.dbPost.findOneOrFail(statDto.postId);
    }

    return await this.db.save(newStat);
  }

  async delete(id: string) {
    const stat = await this.getById(id);

    return await this.db.delete(stat.id);
  }
}
