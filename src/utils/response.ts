import { Response } from "express";

function response(
  res: Response,
  status: number,
  payload: any,
  message: string
) {
  const obj = {
    status,
    message,
    payload,
  };

  res.status(status).json(obj);
}

export default response;
