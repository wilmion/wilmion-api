import { Router } from "express";
import passport from "passport";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import { SkillDto } from "@dtos/skill.dto";

import { idSchema, querySchema } from "@Joi/global.joi";
import { skillSchema, updateSkillSchema } from "@Joi/skill.joi";

import { SkillService } from "@services/skills.service";

import response from "@utils/response";

const route = Router();
const service = new SkillService();

route.get(
  "/",
  validateHandler(querySchema, "query"),
  async (req, res, next) => {
    try {
      const { limit, offset } = req.query as any;

      const data = await service.getAll(limit, offset);

      response(res, 200, data, "The data traveled successfully 🛩️");
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
      const id = req.params.id;

      const data = await service.getById(id);

      response(res, 200, data, "The data traveled successfully 🛩️");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(skillSchema),
  async (req, res, next) => {
    try {
      const body = req.body as SkillDto;

      const result = await service.create(body);

      response(res, 201, result, "The skill has created 🎳🎳");
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
  validateHandler(updateSkillSchema),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;
      const body = req.body as Partial<SkillDto>;

      const result = await service.update(body, id);

      response(res, 200, result, "The skill has updated 👍");
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

      response(res, 200, result, "The skill has removed 😔 ID: " + id);
    } catch (error) {
      next(error);
    }
  }
);

export default route;
