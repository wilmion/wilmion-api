import { Router } from "express";
import passport from "passport";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import { querySchema } from "@Joi/global.joi";

import { IpsUserService } from "@services/ipsUser.service";

import response from "@utils/response";

const route = Router();
const service = new IpsUserService();

route.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(querySchema, "query"),
  async (req, res, next) => {
    try {
      const { limit, offset } = req.query as any;

      const data = await service.getAll(limit, offset);

      response(res, 200, data, "The data traveled successfull ✈️🛫🛬");
    } catch (error) {
      next(error);
    }
  }
);

route.get("/my-ip", async (req, res, next) => {
  try {
    const ip = req.header("x-forwarded-for") || req.connection.remoteAddress;

    const data = await service.getByIp(ip);

    response(res, 200, data, "The data traveled successfull ✈️🛫🛬");
  } catch (error) {
    next(error);
  }
});

route.post("/", async (req, res, next) => {
  try {
    const ip = req.header("x-forwarded-for") || req.connection.remoteAddress;

    const result = await service.create({ ip });

    response(res, 201, result, "🚲🚴‍♀️🚴‍♂️");
  } catch (error) {
    next(error);
  }
});

export default route;
