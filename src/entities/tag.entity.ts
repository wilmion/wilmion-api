import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tags" })
export class Tag {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  color: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  text: string;
}
