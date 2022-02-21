import "reflect-metadata";
import "@db/connection";
import "@strategies/index";
import express from "express";

import setAllRouters from "@routes/index";

import { logErrors, wrapError, errorHandler } from "@middlewares/error.handler";

const app = express();

app.use(express.json());
app.set("trust proxy", true);

setAllRouters(app);

app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`App runing on http://localhost:3000`);
});
