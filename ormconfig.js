module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: false,
  migrations: ["migrations/*.ts"],
  migrationsTableName: "migrations",
  entities: ["src/entities/*.entity.ts"],
  cli: {
    migrationsDir: "migrations",
  },
  //ssl: {
  //rejectUnauthorized: false,
  //},
};
