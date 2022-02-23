import "reflect-metadata";
import "@db/connection";
import "@strategies/index";

import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";

import config from "@config/index";

import setAllRouters from "@routes/index";

import { logErrors, wrapError, errorHandler } from "@middlewares/error.handler";
import { notFoundMiddleware } from "@middlewares/notFound.middleware";

const app = express();

app.use(
  cors({
    origin: config.hostAllowedList,
  })
);
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(express.json());
app.set("trust proxy", true);

setAllRouters(app);

app.use(logErrors);
app.use(wrapError);
app.use(notFoundMiddleware);
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`App runing on http://localhost:3000`);
});
