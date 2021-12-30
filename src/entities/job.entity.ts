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
  readonly nameBusinness: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly color: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly description: string;

  @Column({
    type: "boolean",
    nullable: false,
  })
  readonly active: boolean;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly role: string;

  @Column({
    type: "timestamp",
    nullable: false,
  })
  readonly from: Timestamp;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly to: string | "Currently";

  @Column({
    type: "varchar",
    name: "function_1",
  })
  readonly function1: string | undefined;

  @Column({
    type: "varchar",
    name: "function_2",
  })
  readonly function2: string | undefined;

  @Column({
    type: "varchar",
    name: "function_3",
  })
  readonly function3: string | undefined;

  @Column({
    type: "varchar",
    name: "function_4",
  })
  readonly function4: string | undefined;

  // Relations
  @OneToOne(() => Image, { nullable: false })
  @JoinColumn()
  readonly image: Image;
}
