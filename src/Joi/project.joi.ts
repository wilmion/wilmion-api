import Joi from "@hapi/joi";

const nameSchema = Joi.string().min(4);
const descriptionSchema = Joi.string().min(10);
const linkFrontendSchema = Joi.string().uri();
const linkSchema = Joi.alternatives().try(Joi.string().uri(), Joi.equal(null));
const linkRepositorySchema = Joi.string().uri();
const imageIdSchema = Joi.string();
const skillsIdsSchema = Joi.array().items(Joi.string());

export const projectSchema = {
  name: nameSchema.required(),
  description: descriptionSchema.required(),
  linkFrontend: linkFrontendSchema.required(),
  linkBackend: linkSchema.required(),
  linkBlog: linkSchema.required(),
  linkFigma: linkSchema.required(),
  linkRepository: linkRepositorySchema.required(),
  imageId: imageIdSchema.required(),
  skillsIds: skillsIdsSchema.required(),
};

export const updateProjectSchema = {
  name: nameSchema,
  description: descriptionSchema,
  linkFrontend: linkFrontendSchema,
  linkBackend: linkSchema,
  linkBlog: linkSchema,
  linkFigma: linkSchema,
  linkRepository: linkRepositorySchema,
  imageId: imageIdSchema,
  skillsIds: skillsIdsSchema,
};
