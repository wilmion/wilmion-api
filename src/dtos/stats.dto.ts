import { TypeStat } from "@entities/stats.entity";

export interface StatsDto {
  readonly type: TypeStat;

  readonly postId?: string;
}
