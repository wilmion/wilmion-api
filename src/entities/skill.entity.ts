import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Image } from "./image.entity";

@Entity({ name: "skills" })
export class Skill {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly name: string;

  @Column({
    type: "varchar",
    nullable: false,
    name: "background_color",
  })
  readonly backgroundColor: string;

  @Column({
    type: "varchar",
    nullable: false,
    name: "icon_color",
  })
  readonly iconColor: string;

  @Column({
    type: "varchar",
    default: null,
  })
  readonly icon: string | null;

  @OneToOne(() => Image, { nullable: false })
  @JoinColumn()
  readonly image: Image;
}
