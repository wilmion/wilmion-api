import { TypeContent } from "@entities/content.entity";

export interface ContentDto {
  type: TypeContent;

  content: string;

  imageId: string;

  postId: string;
}
