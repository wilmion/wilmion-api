import jwt from "jsonwebtoken";
import config from "@config/index";

export async function generateToken(data: any) {
  const token = jwt.sign(data, config.jwt.secret, {
    expiresIn: "8h",
  });

  return token;
}
