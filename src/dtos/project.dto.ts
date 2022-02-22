export interface ProjectDto {
  name: string;
  description: string;
  linkFrontend: string;
  linkBackend?: string;
  linkBlog?: string;
  linkFigma?: string;
  linkRepository: string;
  imageId: string;
  skillsIds: string[];
}
