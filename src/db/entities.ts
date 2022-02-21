import { Tag } from "@entities/tag.entity";
import { Stat } from "@entities/stats.entity";
import { StaticContent } from "@entities/staticContents.entity";
import { SocialMedia } from "@entities/socialMedia.entity";
import { Image } from "@entities/image.entity";
import { User } from "@entities/user.entity";
import { Project } from "@entities/project.entity";
import { Job } from "@entities/job.entity";
import { Skill } from "@entities/skill.entity";
import { Content } from "@entities/content.entity";
import { Post } from "@entities/post.entity";
import { IPUser } from "@entities/ip.entity";
import { DatePostWithIps } from "@entities/datePostWithIps.entity";

const entities = [
  Tag,
  SocialMedia,
  StaticContent,
  Stat,
  Image,
  User,
  Project,
  Job,
  Post,
  Content,
  Skill,
  IPUser,
  DatePostWithIps,
];

export default entities;
