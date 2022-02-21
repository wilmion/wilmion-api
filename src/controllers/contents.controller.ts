import { Router } from "express";
import passport from "passport";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import { TokenUser } from "@models/tokenUser.model";

import { idSchema } from "@Joi/global.joi";
import {
  ContentSchema,
  UpdateContentSchema,
  querySchema,
} from "@Joi/content.joi";

import { ContentDto } from "@dtos/content.dto";

import { ContentService } from "@services/contents.service";

import response from "@utils/response";

const route = Router();
const service = new ContentService();

route.get(
  "/",
  validateHandler(querySchema, "query"),
  async (req, res, next) => {
    try {
      const { limit, offset, post_id } = req.query as any;

      const contents = await service.getAll(limit, offset, post_id);

      response(res, 200, contents, "The data traveled successfull");
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
      const id = req.params.id as string;

      const content = await service.getById(id);

      response(res, 200, content, "The data traveled successfull");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(ContentSchema),
  async (req, res, next) => {
    try {
      const body = req.body as ContentDto;

      const result = await service.create(body);

      response(
        res,
        201,
        result,
        `The content with post ID ${body.postId} has been successfully created 🥣🧂`
      );
    } catch (error) {
      next(error);
    }
  }
);

route.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler({ id: idSchema.required() }, "params"),
  validateHandler(UpdateContentSchema),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;
      const body = req.body as Partial<ContentDto>;

      const result = await service.update(body, id);

      response(res, 200, result, "The content was updated 💓");
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
      const id = req.params.id;

      const result = await service.delete(id);

      response(
        res,
        200,
        result,
        "The content has been removed from database 📅"
      );
    } catch (error) {
      next(error);
    }
  }
);

export default route;
