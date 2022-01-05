import "reflect-metadata";
import "@db/connection";
import express from "express";

import setAllRouters from "@routes/index";

const app = express();

app.use(express.json());

setAllRouters(app);

app.listen(3000, () => {
  console.log(`App runing on http://localhost:3000`);
});
