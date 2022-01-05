export interface Config {
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
  encryption: {
    saltRounds: number;
  };
  jwt: {
    secret: string;
  };
}
