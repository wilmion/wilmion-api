import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Image } from "./image.entity";
import { Skill } from "./skill.entity";

@Entity({ name: "projects" })
export class Project {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly name: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly description: string;

  @Column({
    type: "varchar",
    name: "link_frontend",
    nullable: false,
  })
  readonly linkFrontend: string;

  @Column({
    type: "varchar",
    name: "link_backend",
    default: null,
  })
  readonly linkBackend: string;

  @Column({
    type: "varchar",
    name: "link_blog",
    default: null,
  })
  readonly linkBlog: string;

  @Column({
    type: "varchar",
    name: "link_figma",
    default: null,
  })
  readonly linkFigma: string;

  @Column({
    type: "varchar",
    name: "link_repository",
    nullable: false,
  })
  readonly linkRepository: string;

  @Column({
    type: "boolean",
    default: true,
  })
  active: boolean;

  // Relations
  @ManyToOne("images", "projects") // need
  image: Image;

  //Relations n:n
  @ManyToMany("skills", { nullable: true })
  @JoinTable({ name: "CONNECTION_PROJECTS_TO_KILLS" })
  skills: Skill[];
}
