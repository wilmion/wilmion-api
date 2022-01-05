import { UserDto } from "./user.dto";

export class AuthDto {
  readonly email: string;

  readonly password: string;
}

export class RegisterDto extends UserDto {
  readonly password: string;
}
