import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "images" })
export class Image {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({ type: "varchar", nullable: false, name: "image_url" })
  imageUrl: string;

  @Column({ type: "varchar", nullable: false })
  size: string;

  @Column({ type: "varchar", nullable: false })
  resolution: string;

  @Column({
    type: "varchar",
    nullable: false,
    unique: true,
  })
  md5: string;
}
