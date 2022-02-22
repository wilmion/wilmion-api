import Joi from "@hapi/joi";

const nameSchema = Joi.string().min(4);
const descriptionSchema = Joi.string().min(10);
const linkFrontendSchema = Joi.string().uri();
const linkBackendSchema = Joi.string().uri();
const linkBlogSchema = Joi.string().uri();
const linkFigmaSchema = Joi.string().uri();
const linkRepositorySchema = Joi.string().uri();
const imageIdSchema = Joi.string();
const skillsIdsSchema = Joi.array().items(Joi.string());

export const projectSchema = {
  name: nameSchema.required(),
  description: descriptionSchema.required(),
  linkFrontend: linkFrontendSchema.required(),
  linkBackend: linkBackendSchema,
  linkBlog: linkBlogSchema,
  linkFigma: linkFigmaSchema,
  linkRepository: linkRepositorySchema.required(),
  imageId: imageIdSchema.required(),
  skillsIds: skillsIdsSchema.required(),
};

export const updateProjectSchema = {
  name: nameSchema,
  description: descriptionSchema,
  linkFrontend: linkFrontendSchema,
  linkBackend: linkBackendSchema,
  linkBlog: linkBlogSchema,
  linkFigma: linkFigmaSchema,
  linkRepository: linkRepositorySchema,
  imageId: imageIdSchema,
  skillsIds: skillsIdsSchema,
};
