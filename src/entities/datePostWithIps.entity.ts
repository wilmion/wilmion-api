import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { IPUser } from "./ip.entity";
import { Post } from "./post.entity";

@Entity({ name: "date_posts_with_ips" })
export class DatePostWithIps {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "timestamptz",
    default: new Date(),
    nullable: false,
  })
  lastView: Date;

  @Column({
    type: "int",
    default: 0,
    nullable: false,
  })
  quantityViews: number;

  @Column({
    type: "boolean",
    default: false,
    nullable: false,
  })
  likedPost: boolean;

  // Relations many to one

  @ManyToOne(() => Post, (post) => post.datePostWithIps, { nullable: false })
  @JoinColumn()
  post: Post | undefined;

  @ManyToOne(() => IPUser, (ipUser) => ipUser.datePostWithIps, {
    nullable: false,
  })
  @JoinColumn()
  ip: IPUser | undefined;
}
