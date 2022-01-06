import passport from "passport";

import { jwtStrategy } from "./jwt.strategy";

passport.use("jwt", jwtStrategy);
