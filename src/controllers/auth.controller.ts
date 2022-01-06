import { Router } from "express";
import response from "@utils/response";

import { AuthService } from "@services/auth.service";

import { AuthSchema } from "@Joi/auth.joi";
import { RegisterSchema } from "@Joi/user.joi";

import { validateHandler } from "@middlewares/validator.middleware";

const route = Router();
const service = new AuthService();

route.post(
  "/register",
  validateHandler(RegisterSchema),
  async (req, res, next) => {
    try {
      const body = req.body;

      const auth = await service.create(body);

      response(res, 201, auth, "Registered successfully");
    } catch (error) {
      next(error);
    }
  }
);

route.post("/login", validateHandler(AuthSchema), async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const payload = await service.login(email, password);

    response(res, 200, payload, "Login successfull");
  } catch (error) {
    next(error);
  }
});

export default route;
