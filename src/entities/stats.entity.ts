import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Timestamp,
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
    default: () => "CURRENT_TIMESTAMP",
    precision: 3,
  })
  readonly createdAt: Timestamp;

  // Relations one to one
  @ManyToOne("posts", "stats", { nullable: true })
  @JoinColumn()
  post: Post;
}
