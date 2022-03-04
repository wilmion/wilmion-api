import { NextFunction, Request, Response } from "express";
import Boom, { Boom as BoomType } from "@hapi/boom";

import config from "@config/index";

import response from "@utils/response";

export function logErrors(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (config.mode === "PROD") console.log(err);
  next(err);
}

export function wrapError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!err.isBoom) {
    next(Boom.badImplementation(err.message));
    return;
  }
  next(err);
}

export function errorHandler(
  err: BoomType,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    output: { statusCode, payload },
  } = err;

  response(res, statusCode || 500, {}, err.message);
}
