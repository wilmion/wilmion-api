import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Timestamp,
} from "typeorm";
import { Image } from "./image.entity";

@Entity({ name: "jobs" })
export class Job {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
    name: "name_businness",
  })
  nameBusinness: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  color: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  description: string;

  @Column({
    type: "boolean",
    nullable: false,
  })
  active: boolean;

  @Column({
    type: "varchar",
    nullable: false,
  })
  role: string;

  @Column({
    type: "timestamp",
    nullable: false,
  })
  from: Timestamp;

  @Column({
    type: "varchar",
    nullable: false,
  })
  to: string | "Currently";

  @Column({
    type: "varchar",
    name: "function_1",
    nullable: true,
  })
  function1: string | undefined;

  @Column({
    type: "varchar",
    name: "function_2",
    nullable: true,
  })
  function2: string | undefined;

  @Column({
    type: "varchar",
    name: "function_3",
    nullable: true,
  })
  function3: string | undefined;

  @Column({
    type: "varchar",
    name: "function_4",
    nullable: true,
  })
  function4: string | undefined;

  // Relations
  @OneToOne(() => Image, { nullable: false })
  @JoinColumn()
  image: Image;
}
