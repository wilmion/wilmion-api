import "reflect-metadata";
import express from "express";

import { db } from "@db/connection";
import setAllRouters from "@routes/index";

const app = express();

app.use(express.json());

setAllRouters(app);

app.listen(3000, () => {
  console.log(`App runing on http://localhost:3000`);
});
