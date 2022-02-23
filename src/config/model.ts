export interface Config {
  mode: "DEV" | "PROD";
  typeorm: {
    connection: "postgres" | "mysql";
  };
  postgres: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
  port: number;
  hostAllowedList: string[];
  encryption: {
    saltRounds: number;
  };
  jwt: {
    secret: string;
  };
  firebaseConfig: {
    apiKey: string;
    authDomain: string;
    databaseURL?: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId?: string;
  };
}
