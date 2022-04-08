import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { Project } from "@entities/project.entity";
import { Skill } from "@entities/skill.entity";

import { ProjectDto } from "@dtos/project.dto";

import { ImageService } from "./image.service";
import { SkillService } from "./skills.service";

import { getNotRepeatInManyToManyRelations } from "@utils/get-nor-repeat-in-many-to-many-relations";

export class ProjectService {
  private db: Repository<Project>;
  private imageService: ImageService;
  private skillService: SkillService;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Project);
    this.imageService = new ImageService();
    this.skillService = new SkillService();
  }

  async getAll() {
    const project = await this.db.find({
      relations: ["image", "skills"],
    });

    return project;
  }

  async getById(id: string) {
    const project = await this.db.findOne(id, {
      relations: ["skills", "image"],
    });

    if (!project) throw Boom.notFound(`This Project doesn't exist`);

    return project;
  }

  async create(projectDto: ProjectDto) {
    const projects = await this.getAll();

    if (projects.length > 2) throw Boom.illegal("No! The max length is 3 💢");

    const image = await this.imageService.getById(projectDto.imageId);

    let skills: Skill[] = [];

    for (const skillId of projectDto.skillsIds) {
      const skill = await this.skillService.getById(skillId);

      skills.push(skill);
    }

    const newProject = this.db.create(projectDto);
    newProject.image = image;
    newProject.skills = skills;

    return await this.db.save(newProject);
  }

  async update(projectDto: Partial<ProjectDto>, id: string) {
    let project = await this.getById(id);

    if (projectDto.imageId) {
      project.image = await this.imageService.getById(projectDto.imageId);
    }

    if (projectDto.skillsIds) {
      project.skills = await this.getSkillsByIds(projectDto.skillsIds);
    }

    project = { ...project, ...projectDto };

    return await this.db.save(project);
  }

  async activateProject(id: string) {
    const project = await this.getById(id);

    project.active = true;

    return await this.db.save(project);
  }

  async delete(id: string) {
    const project = await this.getById(id);

    project.active = false;

    return await this.db.save(project);
  }

  private async getSkillsByIds(ids: string[]) {
    const skills: Skill[] = [];

    for (const id of ids) {
      const skill = await this.skillService.getById(id);

      skills.push(skill);
    }

    return skills;
  }
}
