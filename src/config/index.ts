import dotenv from "dotenv";
import { Config } from "./model";

dotenv.config({
  path: process.env.NODE_ENV ? ".env" : ".prod.env",
});

const config: Config = {
  typeorm: {
    connection: process.env.TYPEORM_CONNECTION as any,
  },
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
  port: parseInt(process.env.PORT, 10),
};

export default config;
