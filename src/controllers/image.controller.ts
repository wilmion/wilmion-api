import { Router } from "express";
import passport from "passport";

import { ImageService } from "@services/image.service";

import { imageSchema } from "@Joi/image.joi";
import { idRouteSchema, querySchema } from "@Joi/global.joi";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import response from "@utils/response";

const router = Router();
const service = new ImageService();

router.get(
  "/",
  validateHandler(querySchema, "query"),
  async (req, res, next) => {
    try {
      const { limit, offset } = req.query as any;

      const data = await service.getAll(limit, offset);

      response(res, 200, data, "Data traveled successfully");
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/:id",
  validateHandler(idRouteSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const image = await service.getById(id);

      response(res, 200, image, "This is an image");
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/by-md5/:id",
  validateHandler(idRouteSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const image = await service.getByMd5(id);

      response(res, 200, image, "This is an image");
    } catch (e) {
      next(e);
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(imageSchema),
  async (req, res, next) => {
    try {
      const { body } = req;

      const files = req.files;

      const data = await service.create(body, files.image);

      response(res, 201, data, "Insert Image in the database");
    } catch (e) {
      next(e);
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(idRouteSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await service.delete(id);

      response(res, 200, data, `The Image with ID ${id} has removed`);
    } catch (e) {
      next(e);
    }
  }
);

export default router;
