import { Router } from "express";
import passport from "passport";

import { TokenUser } from "@models/tokenUser.model";

import { validateHandler } from "@middlewares/validator.middleware";

import {
  UserUpdateSchema,
  UserSchenma,
  loginSchema,
  updatePasswordSchema,
} from "@Joi/user.joi";

import { UsersService } from "@services/users.service";

import response from "@utils/response";

const route = Router();
const service = new UsersService();
route.get(
  "/get-my-account",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const token = req.user as TokenUser;

      const data = await service.getById(token.id);

      response(res, 200, data, "This is your user's profile");
    } catch (e) {
      next(e);
    }
  }
);

route.post(
  "/register",
  validateHandler(UserSchenma),
  async (req, res, next) => {
    try {
      const { body } = req;

      const user = await service.create(body);

      response(res, 201, user, "Register was successfull");
    } catch (err) {
      next(err);
    }
  }
);

route.post("/login", validateHandler(loginSchema), async (req, res, next) => {
  try {
    const { body } = req;

    const data = await service.login(body);

    response(res, 200, data, "Login successfuly");
  } catch (err) {
    next(err);
  }
});

route.patch(
  "/",
  passport.authenticate("jwt", { session: false }),
  validateHandler(UserUpdateSchema),
  async (req, res, next) => {
    try {
      const token = req.user as TokenUser;
      const { id } = token;
      const body = req.body;

      const data = await service.update(id, body);

      response(res, 200, data, "User updated successfully");
    } catch (error) {
      next(error);
    }
  }
);

route.post("/change-email", async (req, res, next) => {
  try {
    const payload = await service.changeEmail();

    response(res, 200, payload, payload);
  } catch (err) {
    next(err);
  }
});

route.post(
  "/change-password",
  passport.authenticate("jwt", { session: false }),
  validateHandler(updatePasswordSchema),
  async (req, res, next) => {
    try {
      const token = req.user as TokenUser;
      const { id } = token;
      const { body } = req;

      const payload = await service.changePassword(
        body.oldPassword,
        body.newPassword,
        id
      );

      response(res, 200, payload, "Your password are updated now");
    } catch (err) {
      next(err);
    }
  }
);

route.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const token = req.user as TokenUser;
      const { id } = token;

      const payload = await service.delete(id);

      response(res, 200, payload, "Desactivate your account.");
    } catch (err) {
      next(err);
    }
  }
);

export default route;
