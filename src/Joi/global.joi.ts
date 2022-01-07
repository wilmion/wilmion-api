import Joi from "@hapi/joi";

export const idSchema = Joi.string();

const limitSchema = Joi.number().min(0).positive();

const offsetSchema = Joi.number().min(0).positive();

export const idRouteSchema = {
  id: idSchema.required(),
};

export const querySchema = {
  limit: limitSchema,
  offsetSchema: offsetSchema,
};
