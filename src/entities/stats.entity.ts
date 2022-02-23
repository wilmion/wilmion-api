import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  ManyToOne,
} from "typeorm";
import { Post } from "./post.entity";

export enum TypeStat {
  newUsers = "NU", // In own controller
  visitsToTheBlogPost = "VTTBP", // builded
  visitsToThePortafolioPage = "VTTPP", // In own controller
  visitsToTheContactPage = "VTTCP", // In own controller
  numberOfClickWhenSubmittingTheForm = "NOCWSTF", // In own controller
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
  @ManyToOne(() => Post, (post) => post.stats, { nullable: true })
  post: Post;
}
