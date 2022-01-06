import { Strategy, ExtractJwt } from "passport-jwt";
import Boom from "@hapi/boom";

import { TokenUser } from "@models/tokenUser.model";

import config from "@config/index";

import { UsersService } from "@services/users.service";

const service = new UsersService();

export const jwtStrategy = new Strategy(
  {
    secretOrKey: config.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: TokenUser, done) => {
    try {
      await service.getById(payload.id_user);

      done(null, payload);
    } catch (e) {
      return done(Boom.unauthorized(e));
    }
  }
);
