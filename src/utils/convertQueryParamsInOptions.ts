import { FindManyOptions } from "typeorm";

export function convertQueryParamsInOptions<T>(limit: string, offset: string) {
  const options: FindManyOptions<T> = {
    take: limit ? parseInt(limit, 10) : 20,
    skip: offset ? parseInt(offset, 10) : 0,
  };

  return options;
}
