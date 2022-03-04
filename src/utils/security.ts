import bcrypt from "bcryptjs";

import config from "@config/index";

export async function encryption(password: string) {
  const salts = await bcrypt.genSalt(config.encryption.saltRounds);

  const hashedPassword = await bcrypt.hash(password, salts);

  return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isPassword = await bcrypt.compare(password, hashedPassword);

  return isPassword;
}
