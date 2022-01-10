import Joi from "@hapi/joi";

const imageUrlSchema = Joi.string().uri();

const sizeSchema = Joi.string().min(4);

export const imageSchema = {
  imageUrl: imageUrlSchema.required(),
  size: sizeSchema.required(),
};

export const imageUpdateSchema = {
  imageUrl: imageUrlSchema,
  size: sizeSchema,
};
