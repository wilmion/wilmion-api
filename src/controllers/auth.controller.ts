import { Router } from "express";
import response from "@utils/response";

const route = Router();

route.get("/register", async (req, res) => {
  try {
    response(res, 200, { message: "In work" }, "worked");
  } catch (error) {
    res.send("No....");
  }
});

export default route;
