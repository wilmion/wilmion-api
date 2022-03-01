import { createConnection, ConnectionOptions, Connection } from "typeorm";
import config from "@config/index";
import entities from "./entities";

export class ConnectionLib {
  private _db: Connection | undefined;
  private options: ConnectionOptions = {
    type: config.typeorm.connection,
    host: config.postgres.host,
    port: config.postgres.port,
    username: config.postgres.username,
    password: config.postgres.password,
    database: config.postgres.database,
    entities,
    logging: true,
  };

  constructor() {
    if (config.mode === "PROD") this.setSslConnection();
    this.connect();
  }

  private setSslConnection() {
    this.options = {
      ...this.options,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    };
  }

  private async connect() {
    this._db = await createConnection(this.options);
    return this._db;
  }

  public get db() {
    if (!this._db) return this.connect();
    return this._db;
  }
}

export const connection = new ConnectionLib();
