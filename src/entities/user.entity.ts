import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Image } from "./image.entity";
import { Post } from "./post.entity";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  readonly username: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly password: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly name: string;

  @Column({
    type: "varchar",
    nullable: false,
    default: "NOT-DEFINED",
  })
  readonly job: string;

  @Column({
    type: "boolean",
    default: true,
  })
  readonly active: boolean;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  readonly email: string;

  @ManyToOne("images", "users") // need
  image: Image;

  @OneToMany("posts", "user", { nullable: true })
  posts: Post[];
}
