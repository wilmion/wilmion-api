import { Router } from "express";
import passport from "passport";

import { validatePermision } from "@middlewares/authorization.middleware";
import { validateHandler } from "@middlewares/validator.middleware";

import { staticContentSchema } from "@Joi/staticContent.joi";

import { StaticContentsService } from "@services/static-contents.service";

import response from "@utils/response";

const route = Router();
const service = new StaticContentsService();

route.get("/", async (req, res) => {
  try {
    const { limit, offset } = req.query as any;

    const data = await service.getAll(limit, offset);

    response(res, 200, data, "Data traveled successfully");
  } catch (e) {
    response(res, 500, {}, "Internal server error");
  }
});

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

export default route;
