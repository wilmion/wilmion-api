import dotenv from "dotenv";
import { Config } from "./model";

const development = process.env.NODE_ENV === "development";

dotenv.config({
  path: development ? ".develop.env" : ".env",
});

const config: Config = {
  mode: development ? "DEV" : "PROD",
  typeorm: {
    url: process.env.DATABASE_URL,
  },
  port: process.env.PORT || 5000,
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
