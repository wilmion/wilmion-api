export class UserDto {
  readonly username: string;

  readonly password: string;

  readonly name: string;

  readonly job: string;

  readonly email: string;

  readonly imageId: string;
}

export interface loginDto {
  readonly email: string;
  readonly password: string;
}
