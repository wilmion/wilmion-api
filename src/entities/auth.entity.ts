import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity({ name: "auth" })
export class Auth {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  readonly email: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly password: string;

  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user: User;
}
