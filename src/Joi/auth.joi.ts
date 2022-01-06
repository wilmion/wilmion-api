import * as Joi from "@hapi/joi";

export const emailSchema = Joi.string().email();
export const passwordSchema = Joi.string();

export const AuthSchema = {
  email: emailSchema.required(),
  password: passwordSchema.required(),
};
