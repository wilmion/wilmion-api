import { Application, Router } from "express";

//routes
import StaticContentsRoute from "@controllers/static-contents.controller";
import UserRoute from "@controllers/users.controller";
import ImageRoute from "@controllers/image.controller";
import JobsRoute from "@controllers/jobs.controller";
import TagsRoute from "@controllers/tags.controller";

async function setAllRouters(app: Application) {
  const router = Router();

  // Routes
  router.use("/static-contents", StaticContentsRoute);
  router.use("/users", UserRoute);
  router.use("/images", ImageRoute);
  router.use("/jobs", JobsRoute);
  router.use("/tags", TagsRoute);

  app.use("/api", router);
}

export default setAllRouters;
