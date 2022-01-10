import { Repository } from "typeorm";
import Boom from "@hapi/boom";

import { connection } from "@db/connection";

import { ImageService } from "@services/image.service";

import { User } from "@entities/user.entity";
import { UserDto } from "@dtos/user.dto";

export class UsersService {
  private db: Repository<User>;
  private imageService: ImageService;

  constructor() {
    this.connect();
    this.imageService = new ImageService();
  }

  private async connect() {
    const database = await connection.db;

    this.db = database.getRepository(User);
  }

  async getById(id: string) {
    const user = await this.db.findOne(id, {
      relations: ["image"],
    });

    if (!user) {
      throw Boom.notFound("User not found");
    }

    return user;
  }

  async create(payload: UserDto) {
    const image = await this.imageService.getById(payload.imageId);

    const newUser = await this.db.create(payload);
    newUser.image = image;

    return await this.db.save(newUser);
  }

  async update(
    id: string,
    payload: Partial<UserDto>,
    fromAuthController = false
  ) {
    if (payload.imageId) await this.comprobateImageId(payload.imageId);

    if (payload.email && !fromAuthController)
      throw Boom.conflict(
        "The email is not change, visit the url http://localhost:3000/api/auth/change-email"
      );

    const user = await this.getById(id);

    const userUpdated = await this.db.update(user.id, payload);

    return userUpdated;
  }

  async delete(id: string) {
    const user = await this.getById(id);

    await this.db.delete(user.id);

    return "Deleted successfully";
  }

  private async comprobateImageId(imageId: string) {
    const existAnImage = await this.imageService.getById(imageId);

    if (!existAnImage) throw Boom.notFound("Image entity does not exist");
  }
}
