import * as Joi from "@hapi/joi";

export const emailSchema = Joi.string().email();
export const passwordSchema = Joi.string().min(8);

export const AuthSchema = {
  email: emailSchema.required(),
  password: passwordSchema.required(),
};

export const AuthUpdateSchema = {
  newPassword: passwordSchema,
  currentPassword: passwordSchema,
};

export const AuthDeleteSchema = {
  currentPassword: passwordSchema,
};
