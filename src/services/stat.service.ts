import { Between, FindManyOptions, In, Repository } from "typeorm";
import Boom from "@hapi/boom";
import config from "@config/index";

import { connection } from "@db/connection";

import { Stat, TypeStat } from "@entities/stats.entity";
import { Post } from "@entities/post.entity";

import { GraphicStat, ReturnedData, StatsDto } from "@dtos/stats.dto";

export class StatService {
  private db: Repository<Stat>;
  private dbPost: Repository<Post>;

  private daysVerbs = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  private month = [
    "Juan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agoust",
    "September",
    "October",
    "November",
    "December",
  ];

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Stat);
    this.dbPost = database.getRepository(Post);
  }

  async getAll(from: string, to: string, type: TypeStat) {
    const types = type.split(",");

    let query: FindManyOptions<Stat> = {
      where: {
        type: In(types),
        createdAt: Between(from, `${to} 23:59:59`),
      },
      relations: ["post"],
    };

    const stats = await this.db.find(query);

    const data: ReturnedData[] = [];

    types.forEach((type) => {
      const raw = this.getStats(stats, type, from, to);

      data.push({
        title: type,
        raw,
      });
    });

    return data;
  }

  async getById(id: string) {
    const stat = await this.db.findOne(id, { relations: ["post"] });

    if (!stat) throw Boom.notFound(`The stat with ID: ${id} doesn't exist`);

    return stat;
  }

  async create(statDto: StatsDto, origin?: string) {
    if (origin) {
      if (!config.hostAllowedList.includes(origin)) {
        throw Boom.forbidden("🤨🤨🤨");
      }
    }

    const newStat = this.db.create(statDto);

    if (statDto.postId) {
      newStat.post = await this.dbPost.findOneOrFail(statDto.postId);
    }

    return await this.db.save(newStat);
  }

  async delete(id: string) {
    const stat = await this.getById(id);

    return await this.db.delete(stat.id);
  }

  private getDifferenceOfDays(from: string | Date, to: string) {
    const dates: Date[] = [new Date(`${to}T00:00:00`)];
    from = new Date(`${from}T00:00:00`);
    let limit: boolean = false;

    while (!limit) {
      let compareDate = new Date(dates[dates.length - 1]);

      compareDate.setDate(compareDate.getUTCDate() - 1);

      if (compareDate.getTime() >= from.getTime()) {
        dates.push(compareDate);
      } else limit = true;
    }

    return dates;
  }

  private agroupingByDateRange(from: string, to: string) {
    let type: "days" | "weeks" | "months" | "years" = "days";

    const days = this.getDifferenceOfDays(from, to);

    if (days.length > 365) type = "years";
    else if (days.length > 31) type = "months";
    else if (days.length > 7) type = "weeks";

    if (type === "days") return { cycles: days, type };

    const cycles: Date[][] = [[]];

    days.forEach((day, index) => {
      let condition = false;

      const oldIndex = index - 1 === -1 ? 0 : index - 1;

      switch (type) {
        case "months":
          const month = day.getUTCMonth();

          const monthLast = days[oldIndex].getUTCMonth();

          condition = month !== monthLast;
          break;
        case "weeks":
          const dayNumber = day.getUTCDay();

          condition = dayNumber === 0;
          break;
        case "years":
          const year = day.getUTCFullYear();

          const lastYear = days[oldIndex].getUTCFullYear();

          condition = year !== lastYear;
          break;

        default:
          condition = false;
          break;
      }

      if (condition) {
        cycles.push([day]);
      } else {
        cycles[cycles.length - 1].push(day);
      }
    });

    return { cycles, type };
  }

  private separateData(from: string, to: string, stats: Stat[]) {
    const agrupingData: { day: string; items: Stat[] }[] = [];
    9;
    const { cycles, type } = this.agroupingByDateRange(from, to);

    if (Array.isArray(cycles[0])) {
      cycles.forEach((range: any) => {
        const fromRange = range[range.length - 1];
        const toRange = range[0];

        const items = stats.filter((stat) => {
          const createdAt = new Date(stat.createdAt.toString());

          const isGreater = createdAt.getTime() >= fromRange.getTime();
          const isLess = createdAt.getTime() <= toRange.getTime();

          return isGreater && isLess;
        });

        let text = "";

        if (type === "weeks") {
          text = `Week ${fromRange.getDate()} - ${toRange.getDate()}`;
        } else if (type === "months") {
          text = this.month[fromRange.getMonth()];
        } else {
          text = `${fromRange.getFullYear()}`;
        }

        agrupingData.push({
          day: text,
          items,
        });
      });
    } else {
      cycles.forEach((day: any) => {
        const items = stats.filter((stat) => {
          const createdAt = new Date(stat.createdAt.toString());

          const isDate = createdAt.getUTCDate() === day.getUTCDate();
          const isMonth = createdAt.getUTCMonth() === day.getUTCMonth();
          const isYear = createdAt.getUTCFullYear() === day.getUTCFullYear();

          return isDate && isMonth && isYear;
        });

        const verbDay = this.daysVerbs[day.getDay()];

        agrupingData.push({
          day: `${verbDay} ${day.getDate()}`,
          items,
        });
      });
    }

    return agrupingData;
  }

  private getStats(stats: Stat[], type: string, from: string, to: string) {
    stats = stats.filter((s) => s.type === type);

    const info = this.separateData(from, to, stats);

    const value: GraphicStat[] = [];

    info.forEach((i) =>
      value.push({
        text: i.day,
        value: i.items.length,
      })
    );

    return value;
  }
}
