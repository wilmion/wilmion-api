import { createConnection, ConnectionOptions, Connection } from "typeorm";
import config from "@config/index";
import entities from "./entities";

export class ConnectionLib {
  private _db: Connection | undefined;
  private options: ConnectionOptions = {
    type: "postgres",
    url: config.typeorm.url,
    synchronize: false,
    entities,
    logging: true,
  };

  constructor() {
    this.connect();
  }

  private getSsl(): any {
    if (config.mode === "PROD") {
      return {
        ssl: {
          rejectUnauthorized: false,
        },
      };
    }

    return {};
  }

  private async connect() {
    this._db = await createConnection({ ...this.options, ...this.getSsl() });
    return this._db;
  }

  public get db() {
    if (!this._db) return this.connect();
    return this._db;
  }
}

export const connection = new ConnectionLib();
