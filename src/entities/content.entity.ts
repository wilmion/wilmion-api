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
  readonly id: string;

  @Column({
    type: "enum",
    enum: TypeContent,
    nullable: false,
  })
  readonly type: TypeContent;

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
  readonly content: string;

  // Relations 1:1
  @OneToOne(() => Image, { nullable: false })
  @JoinColumn()
  readonly image: Image;

  // Relations n:1

  @ManyToOne(() => Post, (post) => post.contents)
  readonly post: Post;
}
