import Joi from "@hapi/joi";

import { emailSchema } from "./auth.joi";

const introductionSchema = Joi.string().min(20);

const responseQuestionSchema = Joi.string().min(20);

export const staticContentSchema = {
  introduction: introductionSchema.required(),
  responseQuestion: responseQuestionSchema.required(),
  contactEmail: emailSchema,
};
