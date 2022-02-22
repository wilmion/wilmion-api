import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "social-media" })
export class SocialMedia {
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
  })
  readonly icon: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly color: string;

  @Column({
    type: "boolean",
    default: true,
  })
  active: boolean;

  @Column({ type: "varchar", nullable: false, name: "redirect_url" })
  readonly redirectUrl: string;
}
