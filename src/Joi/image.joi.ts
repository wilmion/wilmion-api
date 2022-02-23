import Joi from "@hapi/joi";

const sizeSchema = Joi.string().min(4);

export const imageSchema = {
  size: sizeSchema.required(),
};
