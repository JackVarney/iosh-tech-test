import express, { Router } from "express";
import { PageSpeedController } from "./api/page-speed/page-speed.controller";
import { PageSpeedService } from "./api/page-speed/page-speed.service";

const routingMiddleware = (): Router => {
  const router = express.Router();

  router.use(
    "/page-speed",
    new PageSpeedController(new PageSpeedService()).getRouter()
  );

  return router;
};

export { routingMiddleware };
