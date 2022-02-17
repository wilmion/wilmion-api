import Joi from "@hapi/joi";

const colorSchema = Joi.string().hex();
const textSchema = Joi.string().min(5).max(35);

export const tagSchema = {
  color: colorSchema.required(),
  text: textSchema.required(),
};

export const UpdateTagSchema = {
  color: colorSchema,
  text: textSchema,
};
