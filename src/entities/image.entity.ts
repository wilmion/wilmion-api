import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Content } from "./content.entity";
import { Job } from "./job.entity";
import { Project } from "./project.entity";
import { Skill } from "./skill.entity";
import { User } from "./user.entity";

@Entity({ name: "images" })
export class Image {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({ type: "varchar", nullable: false, name: "image_url" })
  imageUrl: string;

  @Column({ type: "varchar", nullable: false })
  size: string;

  @Column({ type: "varchar", nullable: false })
  resolution: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  md5: string;

  @OneToMany("contents", "image", { nullable: true })
  contents: Content;

  @OneToMany("jobs", "image", { nullable: true })
  jobs: Job;

  @OneToMany("projects", "image", { nullable: true })
  projects: Project;

  @OneToMany("skills", "image", { nullable: true })
  skills: Skill;

  @OneToMany("users", "image", { nullable: true })
  users: User;
}
