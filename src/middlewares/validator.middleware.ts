import { NextFunction, Request, Response } from "express";
import * as Joi from "@hapi/joi";
import { badRequest } from "@hapi/boom";

export type checkValidator = "body" | "params" | "query";

function validatorSchema(schema: any, data: any) {
  const { error } = Joi.object(schema).validate(data);

  return error;
}

export function validateHandler(schema: any, check: checkValidator = "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[check];

    const error = validatorSchema(schema, data);

    if (error) next(badRequest(error.message));

    next();
  };
}
