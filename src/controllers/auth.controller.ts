import { Router } from "express";
import response from "@utils/response";

import { AuthService } from "@services/auth.service";

const route = Router();
const service = new AuthService();

route.post("/register", async (req, res) => {
  try {
    const body = req.body;

    const auth = await service.create(body);

    response(res, 201, auth, "Registered successfully");
  } catch (error) {
    res.send("No....");
  }
});

route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const payload = await service.login(email, password);

    response(res, 200, payload, "Login successfull");
  } catch (error) {
    console.log(error);
    res.send("No....");
  }
});

export default route;
