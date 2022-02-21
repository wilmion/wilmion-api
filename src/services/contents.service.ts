import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { Content } from "@entities/content.entity";
import { Post } from "@entities/post.entity";
import { ContentDto } from "@dtos/content.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

import { ImageService } from "./image.service";

export class ContentService {
  private db: Repository<Content>;
  private dbPost: Repository<Post>;
  private imageService: ImageService;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Content);
    this.dbPost = database.getRepository(Post);
    this.imageService = new ImageService();
  }

  private async getPostById(id: string) {
    const post = await this.dbPost.findOne(id);

    if (!post) throw Boom.notFound("The post with ID " + id + " doesn't exist");

    return post;
  }

  private async incrementOrDecrementTimeReadOfPost(
    post: Post,
    whatIncrementOrDecrement: number
  ) {
    post.timeRead = post.timeRead + whatIncrementOrDecrement;

    return await this.dbPost.save(post);
  }

  private calculateSecondsOfContent(content: string) {
    return (content.length / 400) * 60;
  }

  async getAll(limit: string, offset: string, postId?: string) {
    let queryParams = convertQueryParamsInOptions<Content>(limit, offset);

    let contents: Content[] = [];

    if (postId) {
      const post = await this.getPostById(postId);

      contents = await this.db.find({
        ...queryParams,
        where: {
          post,
        },
        relations: ["image", "post"],
      });
    } else {
      contents = await this.db.find({
        ...queryParams,
        relations: ["image", "post"],
      });
    }

    return contents;
  }

  async getById(id: string) {
    const content = await this.db.findOne(id, { relations: ["image", "post"] });

    if (!content) throw Boom.notFound("This content of post doesn't exist 🚫");

    return content;
  }

  async create(contentDto: ContentDto) {
    const previousContents = await this.getAll("999", "0", contentDto.postId);

    const image = await this.imageService.getById(contentDto.imageId);
    const post = await this.getPostById(contentDto.postId);

    const newContent = this.db.create(contentDto);

    newContent.orderNumber = previousContents.length + 1;
    newContent.image = image;
    newContent.post = post;

    await this.incrementOrDecrementTimeReadOfPost(
      post,
      this.calculateSecondsOfContent(newContent.content)
    );

    return await this.db.save(newContent);
  }

  async update(
    UpdateContentDto: Partial<ContentDto>,
    id: string,
    numberOrder?: number
  ) {
    let content = await this.getById(id);

    if (UpdateContentDto.content) {
      const secondsOfPrincipal = this.calculateSecondsOfContent(
        content.content
      );
      const secondsOfNew = this.calculateSecondsOfContent(
        UpdateContentDto.content
      );
      await this.incrementOrDecrementTimeReadOfPost(
        content.post,
        secondsOfNew - secondsOfPrincipal
      );
    }

    content = {
      ...content,
      ...UpdateContentDto,
      orderNumber: numberOrder ? numberOrder : content.orderNumber,
    };

    if (UpdateContentDto.imageId) {
      const image = await this.imageService.getById(UpdateContentDto.imageId);

      content.image = image;
    }

    return this.db.save(content);
  }

  async delete(id: string) {
    const content = await this.getById(id);

    const contents = await this.getAll("999", "0", content.post.id);

    const newContents = contents.filter(
      (c, index) => index >= content.orderNumber
    );

    for (const contentFor of newContents) {
      await this.update({}, contentFor.id, contentFor.orderNumber - 1);
    }

    await this.incrementOrDecrementTimeReadOfPost(
      contents[0].post,
      this.calculateSecondsOfContent(content.content) / -1
    );

    return this.db.delete(id);
  }
}
