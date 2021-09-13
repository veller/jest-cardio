import { dummyRobotsData } from "./dummy-data";

export class RobotsService {
  public async list() {
    return dummyRobotsData()
      .then((robots) => robots)
      .catch((error) => error);
  }
}
