import { TypeStat } from "@entities/stats.entity";

export interface StatsDto {
  readonly type: TypeStat;

  readonly postId?: string;
}

export interface GraphicStat {
  text: string;
  value: number;
}

export interface ReturnedData {
  title: string;
  raw: GraphicStat[];
}
