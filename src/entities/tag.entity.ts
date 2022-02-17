import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { Post } from "./post.entity";

@Entity({ name: "tags" })
export class Tag {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  color: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  text: string;

  @Column({
    type: "boolean",
    default: true,
  })
  active: boolean;

  @ManyToMany(() => Post, (post) => post.tags)
  posts: Post[];
}
