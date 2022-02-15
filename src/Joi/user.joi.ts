import * as Joi from "@hapi/joi";

export const emailSchema = Joi.string().email();

export const passwordSchema = Joi.string().min(8);

export const usernameSchema = Joi.string().min(4).max(100);

export const nameSchema = Joi.string().min(1).max(100);

export const jobSchema = Joi.string().min(5).max(50);

export const imageIdSchema = Joi.number();

export const UserSchenma = {
  username: usernameSchema.required(),
  password: passwordSchema.required(),
  name: nameSchema.required(),
  job: jobSchema.required(),
  email: emailSchema.required(),
  imageId: imageIdSchema.required(),
};

export const UserUpdateSchema = {
  username: usernameSchema,
  name: nameSchema,
  job: jobSchema,
  email: emailSchema,
  imageId: imageIdSchema,
};

export const loginSchema = {
  email: emailSchema.required(),
  password: passwordSchema.required(),
};

export const updatePasswordSchema = {
  oldPassword: passwordSchema.required(),
  newPassword: passwordSchema.required(),
};
