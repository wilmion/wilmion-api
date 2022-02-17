import { Router } from "express";
import passport from "passport";

import { TokenUser } from "@models/tokenUser.model";

import { validateHandler } from "@middlewares/validator.middleware";
import { validatePermision } from "@middlewares/authorization.middleware";

import { idSchema } from "@Joi/global.joi";
import { JobSchema, UpdateJobSchema } from "@Joi/job.joi";

import { JobDto } from "@dtos/job.dto";

import { JobsService } from "@services/jobs.service";

import response from "@utils/response";

const route = Router();
const service = new JobsService();

route.get("/", async (req, res, next) => {
  try {
    const data = await service.getAll();

    response(res, 200, data, "The data traveled successfull");
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

      response(res, 200, data, "The data traveled sucessfull");
    } catch (error) {
      next(error);
    }
  }
);

route.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler(JobSchema),
  async (req, res, next) => {
    try {
      const body = req.body as JobDto;

      const createdJob = await service.create(body);

      response(res, 201, createdJob, "Job successfull created 💪🧑‍🏭");
    } catch (e) {
      next(e);
    }
  }
);

route.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatePermision(["admin"]),
  validateHandler({ id: idSchema.required() }, "params"),
  validateHandler(UpdateJobSchema),
  async (req, res, next) => {
    try {
      const body = req.body as Partial<JobDto>;
      const id = req.params.id as string;

      const result = await service.update(id, body);

      response(
        res,
        200,
        result,
        `The job with ID ${id} was updated with successful`
      );
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

      const data = await service.activate(id);

      response(res, 200, data, "The job was successfull activate");
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

      const data = await service.deactivate(id);

      response(res, 200, data, "The job was successfull deactivate");
    } catch (error) {
      next(error);
    }
  }
);

export default route;
