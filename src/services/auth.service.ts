import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { TokenUser } from "@models/tokenUser.model";

import { connection } from "@db/connection";

import { UsersService } from "./users.service";

import { Auth } from "@entities/auth.entity";
import { AuthDto, RegisterDto } from "@dtos/auth.dto";

import { encryption, verify } from "@utils/security";
import { generateToken } from "@utils/jwt";

export class AuthService {
  private db: Repository<Auth>;
  private userService: UsersService;

  constructor() {
    this.connect();
    this.userService = new UsersService();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(Auth);
  }

  private async getById(id: string) {
    const auth = await this.db.findOne(id, {
      relations: ["user"],
    });

    if (!auth) throw Boom.notFound("This user is not exist");

    return auth;
  }

  private async verifyPassword(password: string, hashedPassword: string) {
    const isPassword = await verify(password, hashedPassword);

    if (!isPassword) throw Boom.unauthorized("You not be this user");
  }

  async login(email: string, password: string) {
    const auth = await this.db.findOne({ email }, { relations: ["user"] });

    if (!auth)
      throw Boom.notFound("This email is not corresponding anyone users");

    await this.verifyPassword(password, auth.password);

    const payloadToken: TokenUser = {
      id: auth.id,
      id_user: auth.user.id,
      role: auth.email === "wilmion92@gmail.com" ? "admin" : "customer",
    };

    const token = await generateToken(payloadToken);

    const user = await this.userService.getById(auth.user.id);

    return {
      token,
      user,
    };
  }

  async create(payload: RegisterDto) {
    const email = payload.email;
    const password = await encryption(payload.password);

    const user = await this.userService.create(payload);

    const authDto: AuthDto = {
      email,
      password,
    };

    const newAuth = await this.db.create(authDto);
    newAuth.user = user;

    return await this.db.save(newAuth);
  }

  async changePassword(id: string, password: string, currentPassword: string) {
    const auth = await this.getById(id);

    await this.verifyPassword(currentPassword, auth.password);

    const hashedPassword = await encryption(password);

    const authChanges: Partial<AuthDto> = {
      password: hashedPassword,
    };

    await this.db.update(id, authChanges);

    return {};
  }

  async changeEmail(id: string, email: string) {
    const isExistOtherUser = await this.db.findOne({ email });

    if (isExistOtherUser) throw Boom.conflict("Other user use this email");

    await this.db.update(id, { email });
  }

  async delete(id: string, currentPassword: string) {
    const auth = await this.getById(id);

    await this.verifyPassword(currentPassword, auth.password);

    const authDeleted = await this.db.delete(auth.id);

    await this.userService.delete(auth.user.id);

    return authDeleted;
  }
}
