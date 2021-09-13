import { Request, Response, NextFunction, Router } from "express";
import { RobotsService } from "./robots-service";

export class RobotsController {
  service = new RobotsService();

  public async list(request: Request, response: Response, next: NextFunction) {
    return this.service
      .list()
      .then((robots) => response.status(201).json(robots))
      .catch((error) => next(error));
  }
}
