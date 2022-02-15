export type Permision = "admin" | "customer";

export interface TokenUser {
  id: string;
  role: Permision;
}
