import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  Timestamp,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Content } from "./content.entity";
import { User } from "./user.entity";
import { Tag } from "./tag.entity";

@Entity({ name: "posts" })
export class Post {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly title: string;

  @Column({
    type: "timestamp",
    name: "created_at",
    default: new Date(),
    nullable: false,
  })
  readonly createdAt: Timestamp;

  @Column({
    type: "int",
    nullable: false,
    default: 0,
  })
  readonly likes: number;

  @Column({
    type: "double precision",
    name: "time_read",
    nullable: false,
  })
  readonly timeRead: number;

  @Column({
    type: "int",
    nullable: false,
    default: 0,
  })
  readonly views: number;

  // Relations one to one
  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  readonly user: User;

  // relations 1:n
  @OneToMany(() => Content, (content) => content.post, { nullable: false })
  readonly contents: Content[];

  // relations many to many
  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable({ name: "CONNECTION_TAGS_TO_POSTS" })
  readonly tags: Tag[];
}
