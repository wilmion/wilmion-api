import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { Post } from "@entities/post.entity";
import { Tag } from "@entities/tag.entity";

import { PostDto } from "@dtos/post.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

import { TagsService } from "./tags.service";
import { UsersService } from "./users.service";

import { getNotRepeatInManyToManyRelations } from "@utils/get-nor-repeat-in-many-to-many-relations";

export class PostsService {
  private db: Repository<Post>;
  private tagsService: TagsService;
  private userService: UsersService;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Post);
    this.tagsService = new TagsService();
    this.userService = new UsersService();
  }

  private async getTags(tagsIds: string[]) {
    const tags: Tag[] = [];

    for (const tagId of tagsIds) {
      const tag = await this.tagsService.getById(tagId);
      tags.push(tag);
    }

    return tags;
  }

  async getAll(limit: string, offset: string) {
    const queryParams = convertQueryParamsInOptions<Post>(limit, offset);

    const posts = await this.db.find({
      ...queryParams,
      where: {
        active: true,
      },
      relations: ["user", "contents", "tags"],
    });

    return posts;
  }

  async getById(id: string) {
    const post = await this.db.findOne(id, {
      relations: ["user", "contents", "tags"],
    });

    if (!post || !post.active) throw Boom.notFound("The post is not exist 🤭");

    return post;
  }

  async create(postDto: PostDto, idUser: string) {
    const user = await this.userService.getById(idUser);

    const newPost = this.db.create(postDto);
    newPost.timeRead = 0;
    newPost.user = user;

    const tags: Tag[] = await this.getTags(postDto.tagsId);

    newPost.tags = tags;

    return await this.db.save(newPost);
  }

  async update(postUpdateDto: Partial<PostDto>, id: string) {
    let post = await this.getById(id);

    if (postUpdateDto.tagsId) {
      const tagsId = postUpdateDto.tagsId;

      const newTagsIds = getNotRepeatInManyToManyRelations<Tag>(
        tagsId,
        post.tags
      );

      const newTags = await this.getTags(newTagsIds);

      post.tags.push(...newTags);
    }

    post = { ...post, ...postUpdateDto };

    return await this.db.save(post);
  }

  async delete(id: string) {
    const post = await this.getById(id);

    post.active = false;

    return this.db.save(post);
  }
}
