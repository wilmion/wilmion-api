import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { ImageService } from "@services/image.service";

import { connection } from "@db/connection";

import { Job } from "@entities/job.entity";

import { JobDto } from "@dtos/job.dto";

export class JobsService {
  private db: Repository<Job>;
  private imageService: ImageService;

  constructor() {
    this.connect();
    this.imageService = new ImageService();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Job);
  }

  async getAll() {
    const jobs = await this.db.find({ relations: ["image"] });

    return jobs;
  }

  async getById(id: string) {
    const job = await this.db.findOne(id, { relations: ["image"] });

    if (!job) throw Boom.notFound("This job doesn't exist");

    return job;
  }

  async create(jobDto: JobDto) {
    const jobs = await this.getAll();
    const image = await this.imageService.getById(jobDto.imageId);

    if (jobs.length >= 2)
      throw Boom.notAcceptable(
        "The maximun jobs is 2. Update the jobs is the best way"
      );

    const newJob = this.db.create(jobDto);
    newJob.image = image;

    return await this.db.save(newJob);
  }

  async update(id: string, jobUpdateDto: Partial<JobDto>) {
    let job = await this.getById(id);

    if (jobUpdateDto.imageId) {
      job.image = await this.imageService.getById(jobUpdateDto.imageId);

      delete jobUpdateDto.imageId;
    }

    job = { ...job, ...(jobUpdateDto as any) };

    return await this.db.save(job);
  }

  async deactivate(id: string) {
    const job = await this.getById(id);

    if (!job.active) throw Boom.conflict("This job already deactivate");

    job.active = false;

    return await this.db.save(job);
  }

  async activate(id: string) {
    const job = await this.getById(id);

    if (job.active) throw Boom.conflict("This job already activate");

    job.active = true;

    return await this.db.save(job);
  }
}
