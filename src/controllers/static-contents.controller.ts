import { Router } from "express";

import { StaticContentsService } from "@services/static-contents.service";

import response from "@utils/response";

const route = Router();
const service = new StaticContentsService();

route.get("/", async (req, res) => {
  try {
    const { limit, offset } = req.query as any;

    const data = await service.getAll(limit, offset);

    response(res, 200, data, "Data traveled successfully");
  } catch (e) {
    response(res, 500, {}, "Internal server error");
  }
});

export default route;
