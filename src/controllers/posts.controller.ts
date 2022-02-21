import { Router } from "express";
import passport from "passport";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import { TokenUser } from "@models/tokenUser.model";

import { idSchema, querySchema } from "@Joi/global.joi";
import { postSchema, UpdatePostSchema } from "@Joi/post.joi";

import { PostDto } from "@dtos/post.dto";
import { DatePostWithIpsDto } from "@dtos/datePostWithIps.dto";

import { PostsService } from "@services/post.service";
import { DatePostsWithIpsService } from "@services/datePostWithIps.service";

import response from "@utils/response";

const route = Router();
const service = new PostsService();
const datePostsWithIpsService = new DatePostsWithIpsService();

route.get(
  "/",
  validateHandler(querySchema, "query"),
  async (req, res, next) => {
    try {
      const { limit, offset } = req.query as any;

      const data = await service.getAll(limit, offset);

      response(res, 200, data, "Data traveled successfull");
    } catch (error) {
      next(error);
    }
  }
);

route.get(
  "/:id",
  validateHandler({ id: idSchema.required() }, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await service.getById(id);

      response(res, 200, data, "Data traveled successfull");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(postSchema),
  async (req, res, next) => {
    try {
      const token = req.user as TokenUser;
      const body = req.body as PostDto;

      const result = await service.create(body, token.id);

      response(res, 201, result, "The post has been created 🍻");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/like/:id",
  validateHandler({ id: idSchema }, "params"),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;

      const ip = req.header("x-forwarded-for") || req.connection.remoteAddress;

      const result = await datePostsWithIpsService.setLike(true, id, ip);

      response(res, 201, result, "Just, the post was liked for you 💓😻");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/dislike/:id",
  validateHandler({ id: idSchema }, "params"),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;

      const ip = req.header("x-forwarded-for") || req.connection.remoteAddress;

      const result = await datePostsWithIpsService.setLike(false, id, ip);

      response(res, 201, result, "Ohh , we lament that you dislike this post");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/view/:id",
  validateHandler({ id: idSchema }, "params"),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;

      const ip = req.header("x-forwarded-for") || req.connection.remoteAddress;

      const result = await datePostsWithIpsService.incrementView(id, ip);

      response(res, 201, result, "Do you like this post? 👀");
    } catch (error) {
      next(error);
    }
  }
);

route.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(UpdatePostSchema),
  validateHandler({ id: idSchema.required() }, "params"),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;
      const body = req.body as Partial<PostDto>;

      const result = await service.update(body, id);

      response(res, 200, result, "The post has been updated ⚒️");
    } catch (error) {
      next(error);
    }
  }
);

route.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler({ id: idSchema.required() }, "params"),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;

      const result = await service.delete(id);

      response(res, 200, result, "The post has been deleted 🚆");
    } catch (error) {
      next(error);
    }
  }
);

export default route;
