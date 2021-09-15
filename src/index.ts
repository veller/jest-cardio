import { config } from "dotenv";
import express from "express";
import { loggerMiddleware } from "./middlewares/logger-middleware";
import router from "./router";

const index = () => {
  config();

  if (!process.env.PORT) {
    process.exit(1);
  }

  const PORT = parseInt(process.env.PORT);

  const app = express();
  app.use(express.json());
  app.use(loggerMiddleware);
  app.use(router);

  app.listen(PORT, () => console.log(`app is running on port ${PORT}`));

  return app;
};

module.exports = index();
