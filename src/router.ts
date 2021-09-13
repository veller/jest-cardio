import express from "express";
import { RobotsController } from "./robots-controller";

const router = express.Router();
const controller = new RobotsController();

router.get("/robots", controller.list.bind(controller));

export default router;
