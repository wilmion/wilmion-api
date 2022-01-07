import { Application, Router } from "express";

//routes
import StaticContentsRoute from "@controllers/static-contents.controller";
import AuthRoute from "@controllers/auth.controller";
import UserRoute from "@controllers/users.controller";

async function setAllRouters(app: Application) {
  const router = Router();

  // Routes
  router.use("/static-contents", StaticContentsRoute);
  router.use("/auth", AuthRoute);
  router.use("/users", UserRoute);

  app.use("/api", router);
}

export default setAllRouters;
