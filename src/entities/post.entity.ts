import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Timestamp,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";

import { Content } from "./content.entity";
import { User } from "./user.entity";
import { Tag } from "./tag.entity";
import { DatePostWithIps } from "./datePostWithIps.entity";
import { Stat } from "./stats.entity";

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
    type: "double precision",
    name: "time_read",
    nullable: false,
  })
  timeRead: number;

  @Column({
    type: "boolean",
    default: true,
  })
  active: boolean;

  // Relations one to one
  @ManyToOne(() => User, (user) => user.posts, { nullable: false })
  user: User;

  // relations 1:n
  @OneToMany(() => Content, (content) => content.post, { nullable: false })
  contents: Content[];

  @OneToMany(() => DatePostWithIps, (datePostWithIps) => datePostWithIps.post)
  datePostWithIps: DatePostWithIps[];

  // Relation many to one or viceverse
  @OneToMany(() => Stat, (stat) => stat.post)
  @JoinColumn()
  stats: Stat[];

  // relations many to many
  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable({ name: "CONNECTION_TAGS_TO_POSTS" })
  tags: Tag[];
}
