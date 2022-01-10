import { Router } from "express";
import response from "@utils/response";
import passport from "passport";

import { AuthService } from "@services/auth.service";

import {
  AuthDeleteSchema,
  AuthSchema,
  AuthUpdateSchema,
  emailSchema,
} from "@Joi/auth.joi";
import { RegisterSchema } from "@Joi/user.joi";

import { validateHandler } from "@middlewares/validator.middleware";

import { TokenUser } from "@models/tokenUser.model";

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

route.patch(
  "/change-password",
  passport.authenticate("jwt", { session: false }),
  validateHandler(AuthUpdateSchema),
  async (req, res, next) => {
    try {
      const token = req.user as TokenUser;
      const { newPassword, currentPassword } = req.body;
      const { id } = token;

      const data = await service.changePassword(
        id,
        newPassword,
        currentPassword
      );

      response(res, 200, data, "Your password is updated successfully");
    } catch (e) {
      next(e);
    }
  }
);

route.patch(
  "/change-email",
  passport.authenticate("jwt", { session: false }),
  validateHandler({ email: emailSchema.required() }),
  async (req, res, next) => {
    try {
      const token = req.user as TokenUser;
      const { email } = req.body;
      const { id, id_user } = token;

      const data = await service.changeEmail(id, id_user, email);

      response(res, 200, data, "Your email was changed successfully");
    } catch (e) {
      next(e);
    }
  }
);

route.delete(
  "/delete-my-account",
  passport.authenticate("jwt", { session: false }),
  validateHandler(AuthDeleteSchema),
  async (req, res, next) => {
    try {
      const token = req.user as TokenUser;
      const { id } = token;
      const { currentPassword } = req.body;

      const data = await service.delete(id, currentPassword);

      response(res, 200, {}, "Your account removed successfully");
    } catch (e) {
      next(e);
    }
  }
);

export default route;
