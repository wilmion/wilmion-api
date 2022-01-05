export class StaticContentDto {
  readonly introduction: string;

  readonly responseQuestion: string;

  readonly contactEmail: string | undefined;
}

export type PagesOfStaticContent = "contact";
