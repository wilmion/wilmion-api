import { Router } from "express";
import passport from "passport";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import { idSchema, querySchema } from "@Joi/global.joi";
import { tagSchema, UpdateTagSchema } from "@Joi/tag.joi";

import { TagDto } from "@dtos/tag.dto";

import { TagsService } from "@services/tags.service";

import response from "@utils/response";

const route = Router();
const service = new TagsService();

route.get(
  "/",
  validateHandler(querySchema, "query"),
  async (req, res, next) => {
    try {
      const { limit, offset } = req.query as any;

      const data = await service.getAll(limit, offset);

      response(res, 200, data, "The data traveled successfull");
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

      const data = await service.getById(id);

      response(res, 200, data, "The data traveled successfull");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(tagSchema),
  async (req, res, next) => {
    try {
      const body = req.body as TagDto;

      const result = await service.create(body);

      response(res, 201, result, "The tag was created successfull 🏷️");
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
  validateHandler(UpdateTagSchema),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;
      const body = req.body as Partial<TagDto>;

      const result = await service.update(body, id);

      response(res, 200, result, "The tag was updated successfull 🏷️🔁");
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

      const data = await service.delete(id);

      response(res, 200, data, "Remove successfully");
    } catch (error) {
      next(error);
    }
  }
);

export default route;
