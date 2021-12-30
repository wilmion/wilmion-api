import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./user.entity";
import { Post } from "./post.entity";
import { Content } from "./content.entity";

@Entity({ name: "comments" })
export class Comment {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
  })
  readonly name: string | undefined;

  @Column({
    type: "timestamp",
    nullable: false,
    default: new Date(),
    name: "created_at",
  })
  readonly createdAt: Timestamp;

  @Column({
    type: "int",
    nullable: false,
  })
  readonly likes: number;

  @Column({
    type: "double precision",
    name: "time_to_read",
    nullable: false,
  })
  readonly timeToRead: number;

  //Relations one to one
  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  readonly user: User;

  @OneToOne(() => Post, { nullable: false })
  @JoinColumn()
  readonly posts: User;

  // Relations 1:n

  @OneToMany(() => Content, (content) => content.comment, { nullable: false })
  readonly contents: Content[];
}
