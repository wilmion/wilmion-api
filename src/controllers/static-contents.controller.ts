import { Router } from "express";
import passport from "passport";
import Boom from "@hapi/boom";

import { validatePermision } from "@middlewares/authorization.middleware";
import { validateHandler } from "@middlewares/validator.middleware";

import {
  pageParamSchema,
  staticContentSchema,
  staticContentUpdateSchema,
} from "@Joi/staticContent.joi";
import { idRouteSchema, querySchema } from "@Joi/global.joi";

import { StaticContentsService } from "@services/static-contents.service";

import response from "@utils/response";

const route = Router();
const service = new StaticContentsService();

route.get(
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

route.get(
  "/:page",
  validateHandler(pageParamSchema, "params"),
  async (req, res, next) => {
    try {
      const { page }: any = req.params;

      const staticContent = await service.getOne(page);

      if (!staticContent)
        throw Boom.notFound(`The ${page} page does not exist`);

      response(res, 200, staticContent, "This is a static content");
    } catch (e) {
      next(e);
    }
  }
);

route.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(staticContentSchema),
  async (req, res, next) => {
    try {
      const { body } = req;

      const data = await service.create(body);

      response(res, 201, data, "Insert static content");
    } catch (e) {
      next(e);
    }
  }
);

route.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(idRouteSchema, "params"),
  validateHandler(staticContentUpdateSchema),
  async (req, res, next) => {
    try {
      const { body, params } = req;
      const { id } = params;

      const data = await service.update(id, body);

      response(res, 206, data, "The static content was updated successfully");
    } catch (e) {
      next(e);
    }
  }
);

route.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(idRouteSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const staticContentDeleted = await service.delete(id);

      response(
        res,
        200,
        staticContentDeleted,
        `Static Content with ID ${id} has removed`
      );
    } catch (e) {
      next(e);
    }
  }
);

export default route;
