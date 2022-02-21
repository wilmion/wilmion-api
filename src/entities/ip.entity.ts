import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

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

  @OneToMany(() => DatePostWithIps, (datePostWithIps) => datePostWithIps.ip)
  datePostWithIps: DatePostWithIps[];
}
