import Joi from "@hapi/joi";

const titleSchema = Joi.string().min(5);

const userIdSchema = Joi.string();

const tagsIdSchema = Joi.array().items(Joi.string());

export const postSchema = {
  title: titleSchema.required(),
  tagsId: tagsIdSchema.required(),
};

export const UpdatePostSchema = {
  title: titleSchema,
  tagsId: tagsIdSchema,
};
