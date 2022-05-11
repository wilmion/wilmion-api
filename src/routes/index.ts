import { Application, Router } from "express";

//routes
import StaticContentsRoute from "@controllers/static-contents.controller";
import UserRoute from "@controllers/users.controller";
import ImageRoute from "@controllers/image.controller";
import JobsRoute from "@controllers/jobs.controller";
import TagsRoute from "@controllers/tags.controller";
import PostsRoute from "@controllers/posts.controller";
import ContentsRoute from "@controllers/contents.controller";
import IpsUserRoute from "@controllers/ipsUser.controller";
import SkillRoute from "@controllers/skills.controller";
import ProjectRoute from "@controllers/project.controller";
import SocialMedia from "@controllers/social-media.controller";
import StatRoute from "@controllers/stats.controller";

import { IpsUserService } from "@services/ipsUser.service";

const service = new IpsUserService();

async function setAllRouters(app: Application) {
  const router = Router();

  // Routes
  router.use("/static-contents", StaticContentsRoute);
  router.use("/users", UserRoute);
  router.use("/images", ImageRoute);
  router.use("/jobs", JobsRoute);
  router.use("/tags", TagsRoute);
  router.use("/posts", PostsRoute);
  router.use("/contents", ContentsRoute);
  router.use("/ips", IpsUserRoute);
  router.use("/skills", SkillRoute);
  router.use("/projects", ProjectRoute);
  router.use("/social-media", SocialMedia);
  router.use("/stats", StatRoute);

  app.use("/api", router);
  app.get("/home", async (req, res, next) => {
    try {
      const ip = req.header("x-forwarded-for") || req.connection.remoteAddress;

      await service.setIp(ip);

      res.redirect("https://wilmion.com");
    } catch (e) {
      next(e);
    }
  });
}

export default setAllRouters;
