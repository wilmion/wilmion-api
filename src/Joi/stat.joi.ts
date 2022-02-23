import Joi from "@hapi/joi";

import { TypeStat } from "@entities/stats.entity";

import { ToArray } from "@utils/enum";

const typeSchema = Joi.string().valid(...ToArray(TypeStat));

export const statSchema = {
  type: typeSchema.required(),
};

export const querySchema = {
  limit: Joi.number().min(0),
  offset: Joi.number().min(0),
  type: typeSchema,
};
