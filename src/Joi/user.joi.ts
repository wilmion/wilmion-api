import * as Joi from "@hapi/joi";

import { emailSchema, passwordSchema } from "./auth.joi";

export const usernameSchema = Joi.string().min(4).max(100);

export const nameSchema = Joi.string().min(1).max(100);

export const jobSchema = Joi.string().min(5).max(50);

export const imageIdSchema = Joi.number();

export const UserSchenma = {
  username: usernameSchema.required(),
  name: nameSchema.required(),
  job: jobSchema.required(),
  email: emailSchema.required(),
  imageId: imageIdSchema.required(),
};

export const RegisterSchema = {
  password: passwordSchema.required(),
  ...UserSchenma,
};

export const UserUpdateSchema = {
  username: usernameSchema,
  name: nameSchema,
  job: jobSchema,
  email: emailSchema,
  imageId: imageIdSchema,
};
