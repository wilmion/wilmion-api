import bcrypt from "bcrypt";
import config from "@config/index";

export async function encryption(password: string) {
  const hashedPassword = await bcrypt.hash(
    password,
    config.encryption.saltRounds
  );

  return hashedPassword;
}

export async function verify(password: string, hashedPassword: string) {
  const isPassword = await bcrypt.compare(password, hashedPassword);

  return isPassword;
}
