import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({ name: "images" })
export class Image {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({ type: "varchar", nullable: false, name: "image_url" })
  readonly imageUrl: string;

  @Column({ type: "varchar", nullable: false })
  readonly size: string;

  @Column({ type: "varchar", nullable: false })
  readonly resolution: string;
}
