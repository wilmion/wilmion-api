import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
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
    unique: true,
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
    type: "boolean",
    default: true,
  })
  active: boolean;

  @Column({
    type: "varchar",
    default: null,
  })
  icon: string | null;

  @ManyToOne("images", "skills", { nullable: true })
  image: Image;
}
