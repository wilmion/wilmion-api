import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Post } from "./post.entity";

export enum TypeStat {
  newUsers = "NU",
  visitsToTheBlogPost = "VTTBP",
  numberOfCommentsOnPosts = "NOCOP",
  visitsToThePortafolioPage = "VTTPP",
  visitsToTheContactPage = "VTTCP",
  numberOfClickWhenSubmittingTheForm = "NOCWSTF",
}

@Entity({ name: "stats" })
export class Stat {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({ type: "enum", enum: TypeStat, nullable: false })
  readonly type: TypeStat;

  @Column({
    type: "timestamp",
    name: "created_at",
    nullable: false,
    default: new Date(),
  })
  readonly createdAt: Timestamp;

  // Relations one to one
  @OneToOne(() => Post)
  @JoinColumn()
  readonly post: Post;
}
