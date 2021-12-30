import { Tag } from "../entities/tag.entity";
import { Stat } from "../entities/stats.entity";
import { StaticContent } from "../entities/staticContents.entity";
import { SocialMedia } from "../entities/socialMedia.entity";
import { Image } from "../entities/image.entity";
import { User } from "../entities/user.entity";
import { Auth } from "../entities/auth.entity";
import { Project } from "../entities/project.entity";
import { Job } from "../entities/job.entity";
import { Skill } from "../entities/skill.entity";
import { Content } from "../entities/content.entity";
import { Post } from "../entities/post.entity";
import { Comment } from "../entities/comment.entity";

const entities = [
  Tag,
  SocialMedia,
  StaticContent,
  Stat,
  Image,
  Auth,
  User,
  Project,
  Job,
  Post,
  Comment,
  Content,
  Skill,
];

export default entities;
