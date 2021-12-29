import "reflect-metadata";
import express from "express";

import { db } from "./db/connection";
import { Tag } from "./entities/tag.entity";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const database = db.db;

  const tagsRepo = database.getRepository(Tag);

  const tags = tagsRepo.find();

  res.status(200).json({
    message: "¡Hola! Bienvenido a la API de https://wilmion.com",
    documentationOfApi: "https://link.com",
    tags,
  });
});

app.listen(3000, () => {
  console.log(`App runing on http://localhost:3000`);
});
