export type Permision = "admin" | "customer";

export interface TokenUser {
  id: string;
  id_user: string;
  role: Permision;
}
