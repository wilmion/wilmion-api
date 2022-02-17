import Joi from "@hapi/joi";

const nameBusinnessSchema = Joi.string().min(5).max(50);
const descriptionSchema = Joi.string().min(20);
const colorSchema = Joi.string();
const activeSchema = Joi.boolean();
const roleSchema = Joi.string();
const fromSchema = Joi.string();
const toSchema = Joi.string();
const functionSchema = Joi.string();
const imageId = Joi.string().min(1);

export const JobSchema = {
  nameBusinness: nameBusinnessSchema.required(),

  color: colorSchema.required(),

  description: descriptionSchema.required(),

  active: activeSchema.required(),

  role: roleSchema.required(),

  from: fromSchema.required(),

  to: toSchema.required(),

  function1: functionSchema,

  function2: functionSchema,

  function3: functionSchema,

  function4: functionSchema,

  imageId: imageId.required(),
};

export const UpdateJobSchema = {
  nameBusinness: nameBusinnessSchema,

  color: colorSchema,

  description: descriptionSchema,

  active: activeSchema,

  role: roleSchema,

  from: fromSchema,

  to: toSchema,

  function1: functionSchema,

  function2: functionSchema,

  function3: functionSchema,

  function4: functionSchema,

  imageId: imageId,
};
