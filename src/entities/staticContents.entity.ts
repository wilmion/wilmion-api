import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "static-contents" })
export class StaticContent {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({ type: "varchar", nullable: false })
  readonly introduction: string;

  @Column({ type: "varchar", nullable: false, name: "response_question" })
  readonly responseQuestion: string;

  @Column({ type: "varchar", name: "contact_email" })
  readonly contactEmail: string | undefined;
}
