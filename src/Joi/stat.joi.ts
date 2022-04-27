import Joi from "@hapi/joi";

const typeSchema = Joi.string();

export const statSchema = {
  type: typeSchema.required(),
};

export const querySchema = {
  from: Joi.date().required(),
  to: Joi.date().required(),
  type: typeSchema.required(),
};
