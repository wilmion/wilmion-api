import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Image } from "./image.entity";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  readonly username: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly name: string;

  @Column({
    type: "varchar",
    nullable: false,
    default: "NOT-DEFINED",
  })
  readonly job: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  readonly email: string;

  @OneToOne(() => Image, { nullable: false })
  @JoinColumn()
  readonly image: Image;
}
