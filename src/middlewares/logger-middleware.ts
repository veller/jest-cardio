import { NextFunction, Request, Response } from "express";

export function loggerMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log(`making ${request.method} request to ${request.path} path`);
  next();
}
