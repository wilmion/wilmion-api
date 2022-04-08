import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { ImageService } from "./image.service";

import { TokenUser } from "@models/tokenUser.model";

import { User } from "@entities/user.entity";
import { loginDto, UserDto } from "@dtos/user.dto";

import { encryption, verifyPassword } from "@utils/security";
import { generateToken } from "@utils/jwt";

export class UsersService {
  private db: Repository<User>;
  private imageService: ImageService;

  constructor() {
    this.connect();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(User);
    this.imageService = new ImageService();
  }

  async getById(id: string) {
    const user = await this.db.findOne(id, {
      relations: ["image"],
    });

    if (!user || !user.active) {
      throw Boom.notFound("User not found");
    }

    return user;
  }

  async create(payload: UserDto) {
    const image = await this.imageService.getById(payload.imageId);

    const password = await encryption(payload.password);

    const newUser = await this.db.create({ ...payload, password });

    newUser.image = image;
    newUser.posts = [];

    const userSaved = await this.db.save(newUser);

    return this.quitPasswordFromReturnData(userSaved);
  }

  async login(loginDto: loginDto) {
    const user = await this.db.findOne(
      { email: loginDto.email },
      {
        relations: ["image"],
      }
    );

    if (!user || !user.active) throw Boom.notFound("This user doesn't exist");

    const isPassword = await verifyPassword(loginDto.password, user.password);

    if (!isPassword) throw Boom.unauthorized("You're not this user 👎🙅‍♂️🙅‍♀️");

    const payloadToken: TokenUser = {
      id: user.id,
      role: user.email === "wilmion92@gmail.com" ? "admin" : "customer",
    };

    return {
      user: this.quitPasswordFromReturnData(user),
      token: await generateToken(payloadToken),
    };
  }

  async update(id: string, payload: Partial<UserDto>) {
    if (payload.imageId) await this.comprobateImageId(payload.imageId);

    if (payload.password || payload.email)
      throw Boom.conflict("The password or email is not change");

    let user = await this.getById(id);

    user = {
      ...user,
      ...payload,
    };

    return await this.db.save(user);
  }

  async delete(id: string) {
    const user = await this.getById(id);

    return this.db.update(user.id, { ...user, active: false });
  }

  async changeEmail() {
    return "This function for now, it not exist";
  }

  async changePassword(oldPassword: string, newPassword: string, id: string) {
    const user = await this.getById(id);

    const isCurrentPassword = await verifyPassword(oldPassword, user.password);

    if (!isCurrentPassword)
      throw Boom.unauthorized("You're not have property of this user 🤔🙄😑");

    const password = await encryption(newPassword);

    return this.db.update(id, { password });
  }

  private async comprobateImageId(imageId: string) {
    const existAnImage = await this.imageService.getById(imageId);

    if (!existAnImage) throw Boom.notFound("Image entity does not exist");
  }

  private quitPasswordFromReturnData(user: User) {
    return {
      ...user,
      password: "",
    };
  }
}
