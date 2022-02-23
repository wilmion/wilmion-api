import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { DatePostWithIpsDto } from "@dtos/datePostWithIps.dto";

import { DatePostWithIps } from "@entities/datePostWithIps.entity";
import { IPUser } from "@entities/ip.entity";
import { Post } from "@entities/post.entity";
import { TypeStat } from "@entities/stats.entity";

import { PostsService } from "./post.service";
import { StatService } from "./stat.service";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

export class DatePostsWithIpsService {
  private db: Repository<DatePostWithIps>;
  private dbIp: Repository<IPUser>;
  private postService: PostsService;
  private statService: StatService;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(DatePostWithIps);
    this.dbIp = database.getRepository(IPUser);
    this.postService = new PostsService();
    this.statService = new StatService();
  }

  private async getByPostAndIp(post: Post, ip: IPUser) {
    const info = await this.db.findOne({
      where: {
        post,
        ip,
      },
      relations: ["ip", "post"],
    });

    return info;
  }

  // It's deprecated for now
  async getAll(limit: string, offset: string) {
    const queries = convertQueryParamsInOptions<DatePostWithIps>(limit, offset);

    const infos = await this.db.find({
      ...queries,
      relations: ["post", "ip"],
    });

    return infos;
  }

  async create(dto: DatePostWithIpsDto) {
    const post = await this.postService.getById(dto.postId);
    const ip = await this.dbIp.findOneOrFail(dto.ipId);

    const newInfo = this.db.create();

    newInfo.post = post;
    newInfo.ip = ip;

    return await this.db.save(newInfo);
  }

  async setLike(like: boolean, idPost: string, ipString: string) {
    const post = await this.postService.getById(idPost);
    const ip = await this.dbIp.findOneOrFail({ ip: ipString });

    const info = await this.getByPostAndIp(post, ip);

    if (!info) {
      throw Boom.badRequest(
        "Want you like this post without see it post? 🤔🤔"
      );
    }

    info.likedPost = like;

    return info;
  }

  async incrementView(idPost: string, ipString: string) {
    const post = await this.postService.getById(idPost);
    const ip = await this.dbIp.findOneOrFail({ ip: ipString });

    let info = await this.getByPostAndIp(post, ip);

    if (!info) {
      info = await this.create({
        postId: idPost,
        ipId: ip.id,
      });
    }

    const last = new Date(info.lastView.toString());
    const now = new Date();

    const transcurso = now.getTime() - last.getTime();

    if (transcurso < 600000) throw Boom.locked("Hmmmmmmmmm.... 😣");

    info.quantityViews = info.quantityViews + 1;
    info.lastView = now;

    // Turn on the stat
    await this.statService.create({
      type: TypeStat.visitsToTheBlogPost,
      postId: idPost,
    });

    return await this.db.save(info);
  }
}
