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
  id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  title: string;

  @Column({
    type: "timestamp",
    name: "created_at",
    default: new Date(),
  })
  createdAt: Timestamp;

  @Column({
    type: "int",
    default: 0,
  })
  likes: number;

  @Column({
    type: "double precision",
    name: "time_read",
    nullable: false,
  })
  timeRead: number;

  @Column({
    type: "int",
    default: 0,
  })
  views: number;

  // Relations one to one
  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user: User;

  // relations 1:n
  @OneToMany(() => Content, (content) => content.post, { nullable: false })
  contents: Content[];

  // relations many to many
  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable({ name: "CONNECTION_TAGS_TO_POSTS" })
  tags: Tag[];
}
