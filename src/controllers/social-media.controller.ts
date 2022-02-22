import { Router } from "express";
import passport from "passport";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import { SocialMediaDto } from "@dtos/socialMedia.dto";

import { idSchema, querySchema } from "@Joi/global.joi";
import {
  socialMediaSchema,
  updateSocialMediaSchema,
} from "@Joi/socialMedia.joi";

import { SocialMediaService } from "@services/socialMedia.service";

import response from "@utils/response";

const route = Router();
const service = new SocialMediaService();

route.get(
  "/",
  validateHandler(querySchema, "query"),
  async (req, res, next) => {
    try {
      const { limit, offset } = req.query as any;

      const data = await service.getAll(limit, offset);

      response(res, 200, data, "The data traveled successfully 🛬🛫✈️");
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

      response(res, 200, data, "The data traveled successfully 🛬🛫✈️");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(socialMediaSchema),
  async (req, res, next) => {
    try {
      const body = req.body as SocialMediaDto;

      const result = await service.create(body);

      response(res, 201, result, "The social media has been created 😎😎");
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
  validateHandler(updateSocialMediaSchema),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;
      const body = req.body as SocialMediaDto;

      const result = await service.update(body, id);

      response(res, 200, result, "The social media has been updated 😎😎");
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

      response(
        res,
        200,
        result,
        `The social media with Id ${id} has been removed ☹️`
      );
    } catch (error) {
      next(error);
    }
  }
);

export default route;
