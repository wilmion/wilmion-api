import { Router } from "express";
import passport from "passport";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import { idSchema } from "@Joi/global.joi";
import { statSchema, querySchema } from "@Joi/stat.joi";

import { StatsDto } from "@dtos/stats.dto";

import { StatService } from "@services/stat.service";

import response from "@utils/response";

const route = Router();
const service = new StatService();

route.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(querySchema, "query"),
  async (req, res, next) => {
    try {
      const { from, to, type } = req.query as any;

      const data = await service.getAll(from, to, type);

      response(res, 200, data, "The data traveled successfully 🛬🛫✈️");
    } catch (error) {
      next(error);
    }
  }
);

route.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
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

route.post("/", validateHandler(statSchema), async (req, res, next) => {
  try {
    const body = req.body as StatsDto;

    const result = await service.create(body);

    response(res, 201, result, "The stat was created successfully 🥵");
  } catch (error) {
    next(error);
  }
});

route.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler({ id: idSchema.required() }, "params"),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;

      const result = await service.delete(id);

      response(res, 200, result, `The stat with id ${id} has been removed ☹️`);
    } catch (error) {
      next(error);
    }
  }
);

export default route;
