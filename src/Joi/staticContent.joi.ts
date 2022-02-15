import Joi from "@hapi/joi";

import { emailSchema } from "./user.joi";

const introductionSchema = Joi.string().min(20);

const responseQuestionSchema = Joi.string().min(20);

export const staticContentSchema = {
  introduction: introductionSchema.required(),
  responseQuestion: responseQuestionSchema.required(),
  contactEmail: emailSchema,
};

export const staticContentUpdateSchema = {
  introduction: introductionSchema,
  responseQuestion: responseQuestionSchema,
  contactEmail: emailSchema,
};

export const pageParamSchema = { page: Joi.string().valid("contact") };
