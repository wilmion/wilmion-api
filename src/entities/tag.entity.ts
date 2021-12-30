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
  readonly color: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly text: string;

  @ManyToMany(() => Post, (post) => post.tags)
  readonly posts: Post[];
}
