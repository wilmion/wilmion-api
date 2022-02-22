import { FindManyOptions, Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { Skill } from "@entities/skill.entity";

import { SkillDto } from "@dtos/skill.dto";

import { convertQueryParamsInOptions } from "@utils/convertQueryParamsInOptions";

import { ImageService } from "./image.service";
import { Image } from "@entities/image.entity";

export class SkillService {
  private db: Repository<Skill>;
  private imageService: ImageService;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Skill);
    this.imageService = new ImageService();
  }

  async getAll(limit: string, offset: string) {
    const query = convertQueryParamsInOptions<Skill>(limit, offset);

    const skills = await this.db.find({
      ...query,
      where: {
        active: true,
      },
      relations: ["image"],
    });

    return skills;
  }

  async getById(id: string) {
    const skill = await this.db.findOne(id);

    if (!skill || !skill.active)
      throw Boom.notFound("The skill doesn't exist ✏️");

    return skill;
  }

  async create(skillDto: SkillDto) {
    if (
      (skillDto.imageId && skillDto.icon) ||
      (!skillDto.imageId && !skillDto.icon)
    ) {
      throw Boom.conflict("Only one parameter is exist");
    }

    // Comprobate if the skill exist when it state is deactivate
    const existSkill = await this.db.findOne({ name: skillDto.name });

    if (existSkill && !existSkill.active) {
      // If exist, reactivate the skill
      return await this.update(skillDto, existSkill.id);
    }

    let image: Image | null = null;

    if (skillDto.imageId) {
      image = await this.imageService.getById(skillDto.imageId);
    }

    const newSkill = await this.db.create(skillDto);

    newSkill.image = image;

    return await this.db.save(newSkill);
  }

  async update(skillDto: Partial<SkillDto>, id: string) {
    if (skillDto.imageId && skillDto.icon) {
      throw Boom.conflict("Only one parameter is exist");
    }

    let skill = await this.getById(id);
    skill.active = true;

    if (skillDto.imageId) {
      skill.image = await this.imageService.getById(skillDto.imageId);
      skill.icon = null;
    }

    if (skillDto.icon) {
      skill.image = null;
      skill.icon = skillDto.icon;
    }

    skill = { ...skill, ...skillDto };

    return await this.db.save(skill);
  }

  async delete(id: string) {
    const skill = await this.getById(id);

    skill.active = false;

    await this.db.save(skill);

    return {};
  }
}
