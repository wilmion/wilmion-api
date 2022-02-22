import { Router } from "express";
import passport from "passport";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import { ProjectDto } from "@dtos/project.dto";

import { idSchema } from "@Joi/global.joi";
import { projectSchema, updateProjectSchema } from "@Joi/project.joi";

import { ProjectService } from "@services/project.service";

import response from "@utils/response";

const route = Router();
const service = new ProjectService();

route.get("/", async (req, res, next) => {
  try {
    const data = await service.getAll();

    response(res, 200, data, "The data traveled successfull 🛬🛫✈️");
  } catch (error) {
    next(error);
  }
});

route.get(
  "/:id",
  validateHandler({ id: idSchema.required() }, "params"),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;

      const data = await service.getById(id);

      response(res, 200, data, "The data traveled successfull 🛬🛫✈️");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(projectSchema),
  async (req, res, next) => {
    try {
      const body = req.body as ProjectDto;

      const result = await service.create(body);

      response(res, 201, result, "The project has been created now 📽️");
    } catch (error) {
      next(error);
    }
  }
);

route.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(updateProjectSchema),
  validateHandler({ id: idSchema.required() }, "params"),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;
      const body = req.body as Partial<ProjectDto>;

      const result = await service.update(body, id);

      response(res, 200, result, "The project has been updated 🆙");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/activate/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler({ id: idSchema.required() }, "params"),
  async (req, res, next) => {
    try {
      const id = req.params.id as string;

      const result = await service.activateProject(id);

      response(res, 200, result, "The project reactivate! 😁😸🙌");
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

      response(res, 200, result, "The project has been deleted ☹️");
    } catch (error) {
      next(error);
    }
  }
);

export default route;
