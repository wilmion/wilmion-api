import Joi from "@hapi/joi";

const nameSchema = Joi.string().min(4);

const iconSchema = Joi.string();

const colorSchema = Joi.string().hex();

const redirectUrlSchema = Joi.string().uri();

export const socialMediaSchema = {
  name: nameSchema.required(),
  icon: iconSchema.required(),
  color: colorSchema.required(),
  redirectUrl: redirectUrlSchema.required(),
};

export const updateSocialMediaSchema = {
  name: nameSchema,
  icon: iconSchema,
  color: colorSchema,
  redirectUrl: redirectUrlSchema,
};
