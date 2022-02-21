import Joi from "@hapi/joi";

import { ToArray } from "@utils/enum";

import { TypeContent } from "@entities/content.entity";

const typeSchema = Joi.string().valid(...ToArray(TypeContent));

const contentSchema = Joi.string().min(1);

const imageIdSchema = Joi.string();

const postIdSchema = Joi.string();

export const querySchema = {
  limit: Joi.number(),
  offset: Joi.number().min(0),
  post_id: Joi.string(),
};

export const ContentSchema = {
  type: typeSchema.required(),
  content: contentSchema.required(),
  imageId: imageIdSchema.required(),
  postId: postIdSchema.required(),
};

export const UpdateContentSchema = {
  type: typeSchema,
  content: contentSchema,
  imageId: imageIdSchema,
};
