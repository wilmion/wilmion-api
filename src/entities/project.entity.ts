import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
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
    default: null,
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

  // Relations
  @OneToOne(() => Image, { nullable: false })
  @JoinColumn()
  readonly image: Image;

  //Relations n:n
  @ManyToMany(() => Skill)
  @JoinTable({ name: "CONNECTION_PROJECTS_TO_KILLS" })
  skills: Skill[];
}
