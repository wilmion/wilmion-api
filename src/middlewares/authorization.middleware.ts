import { NextFunction, Request, Response } from "express";

import { Permision, TokenUser } from "@models/tokenUser.model";

import Boom from "@hapi/boom";

export function validatePermision(permisions: Permision[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user: TokenUser | undefined = req.user as any;
    if (!user || (user && !user.role)) {
      next(Boom.unauthorized("Missing token or roles"));
    }

    const isAuthorized = permisions.find((r) => r === user.role);

    if (!isAuthorized)
      next(
        Boom.unauthorized("Your role is not sufficient for access this route")
      );

    next();
  };
}
