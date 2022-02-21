import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { IpUserDto } from "@dtos/ips.dto";

import { IPUser } from "@entities/ip.entity";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

export class IpsUserService {
  private db: Repository<IPUser>;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(IPUser);
  }

  async getAll(limit: string, offset: string) {
    const queries = convertQueryParamsInOptions<IPUser>(limit, offset);

    const ips = await this.db.find({
      ...queries,
      relations: ["datePostWithIps"],
    });

    return ips;
  }

  async getByIp(ip: string) {
    const ipUser = await this.db.findOne(
      { ip },
      {
        relations: ["datePostWithIps"],
      }
    );

    if (!ipUser) throw Boom.notFound("This IP doesn't exist 🙃");

    return ipUser;
  }

  async create(ipuserDto: IpUserDto) {
    const newIpUser = this.db.create(ipuserDto);

    return await this.db.save(newIpUser);
  }
}
