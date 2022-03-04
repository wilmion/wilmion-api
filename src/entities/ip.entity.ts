import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";

import { DatePostWithIps } from "./datePostWithIps.entity";

@Entity({ name: "ips_user" })
export class IPUser {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  ip: string;

  @OneToMany("date_posts_with_ips", "ip", { nullable: true })
  @JoinColumn()
  datePostWithIps: DatePostWithIps[];
}
