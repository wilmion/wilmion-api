import Joi from "@hapi/joi";

const nameSchema = Joi.string().min(4);
const backgroundColorSchema = Joi.string().hex();
const iconColorSchema = Joi.string().hex();
const iconSchema = Joi.string();
const imageIdSchema = Joi.string();

export const skillSchema = {
  name: nameSchema.required(),
  backgroundColor: backgroundColorSchema.required(),
  iconColor: iconColorSchema.required(),
  icon: iconSchema,
  imageId: imageIdSchema,
};

export const updateSkillSchema = {
  name: nameSchema,
  backgroundColor: backgroundColorSchema,
  iconColor: iconColorSchema,
  icon: iconSchema,
  imageId: imageIdSchema,
};
