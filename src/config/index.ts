import dotenv from "dotenv";
import { Config } from "./model";

dotenv.config({
  path: process.env.NODE_ENV ? ".env" : ".prod.env",
});

const config: Config = {
  mode: process.env.NODE_ENV ? "DEV" : "PROD",
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
  hostAllowedList: process.env.HOSTALLOWEDLIST.split(" "),
  encryption: {
    saltRounds: parseInt(process.env.ENCRYPTION_SALT_ROUNDS, 10),
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  firebaseConfig: {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
  },
};

export default config;
