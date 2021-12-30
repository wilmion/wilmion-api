import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "social-media" })
export class SocialMedia {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({
    type: "varchar",
    nullable: false,
  })
  readonly name: string;

  @Column({ type: "varchar", nullable: false, name: "redirect_url" })
  readonly redirectUrl: string;
}
