import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Post } from "./post.entity";
import { Image } from "./image.entity";

export enum TypeContent {
  subtitle = "SUBTITLE",
  paragraph = "PARAGRAPH",
  listForPoint = "LIST-FOR-POINT",
  listForNumbers = "LIST-FOR-NUMBERS",
  code = "CODE",
  image = "IMAGE",
}

@Entity({ name: "contents" })
export class Content {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "enum",
    enum: TypeContent,
    nullable: false,
  })
  type: TypeContent;

  @Column({
    type: "int",
    name: "order_number",
    nullable: false,
  })
  orderNumber: number;

  @Column({
    type: "varchar",
    nullable: false,
  })
  content: string;

  // Relations 1:1
  @ManyToOne("images", "contents")
  @JoinColumn()
  image: Image;

  // Relations n:1

  @ManyToOne("posts", "contents")
  post: Post;
}
