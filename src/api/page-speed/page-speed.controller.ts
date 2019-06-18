import express, { Request, Response, NextFunction, Router } from "express";
import { IController } from "../../core/types/IController";
import { PageSpeedService } from "./page-speed.service";
import { ErrorResponse } from "../../core/ErrorResponse";

class PageSpeedController implements IController {
  constructor(private pageSpeedService: PageSpeedService) {
    this.get = this.get.bind(this);
  }

  getRouter(): Router {
    const router = express.Router();

    router.get("/", this.get);

    return router;
  }

  private async get(req: Request, res: Response, next: NextFunction) {
    const websiteUrl: string | undefined = req.query.url;

    if (websiteUrl === undefined) {
      next(
        new ErrorResponse(
          "Bad request",
          "No website url passed with request",
          400
        )
      );

      return;
    }

    try {
      const pageSpeedResponse = await this.pageSpeedService.getPageSpeedRanking(
        websiteUrl
      );

      res.json(pageSpeedResponse);
    } catch (e) {
      next(
        new ErrorResponse(
          "Internal Error",
          "Something went wrong with your request",
          500
        )
      );
    }
  }
}

export { PageSpeedController };
