import { join } from "path";
import { createConnection, ConnectionOptions, Connection } from "typeorm";
import config from "../config";
import { Tag } from "../entities/tag.entity";

export class ConnectionLib {
  private _db: Connection;
  constructor() {
    const options: ConnectionOptions = {
      type: config.typeorm.connection,
      host: config.postgres.host,
      port: config.postgres.port,
      username: config.postgres.username,
      password: config.postgres.password,
      database: config.postgres.database,
      entities: [Tag],
      logging: true,
    };
    this.connect(options);
  }

  private async connect(options: ConnectionOptions) {
    this._db = await createConnection(options);
  }

  public get db() {
    return this._db;
  }
}

export const db = new ConnectionLib();