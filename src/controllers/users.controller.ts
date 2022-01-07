import { Router } from "express";
import passport from "passport";

import { TokenUser } from "@models/tokenUser.model";

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

      const data = await service.getById(token.id_user);

      response(res, 200, data, "This is your user's profile");
    } catch (e) {
      next(e);
    }
  }
);

export default route;
