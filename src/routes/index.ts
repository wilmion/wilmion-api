import { Application, Router } from "express";

//routes
import StaticContentsRoute from "@controllers/static-contents.controller";
import UserRoute from "@controllers/users.controller";
import ImageRoute from "@controllers/image.controller";

async function setAllRouters(app: Application) {
  const router = Router();

  // Routes
  router.use("/static-contents", StaticContentsRoute);
  router.use("/users", UserRoute);
  router.use("/images", ImageRoute);

  app.use("/api", router);
}

export default setAllRouters;
