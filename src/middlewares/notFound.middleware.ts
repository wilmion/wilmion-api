import { Request, Response } from "express";
import { notFound } from "@hapi/boom";

export function notFoundMiddleware(res: Response, req: Request, next: any) {
  next(notFound("The rute of API doesn't exist 🧑‍🏫"));
}
