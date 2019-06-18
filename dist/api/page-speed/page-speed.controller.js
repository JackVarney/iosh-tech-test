"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageSpeedController = void 0;

var _express = _interopRequireDefault(require("express"));

var _ErrorResponse = require("../../core/ErrorResponse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PageSpeedController {
  constructor(pageSpeedService) {
    this.pageSpeedService = pageSpeedService;
    this.get = this.get.bind(this);
  }

  getRouter() {
    const router = _express.default.Router();

    router.get("/", this.get);
    return router;
  }

  async get(req, res, next) {
    const websiteUrl = req.query.url;

    if (websiteUrl === undefined) {
      next(new _ErrorResponse.ErrorResponse("Bad request", "No website url passed with request", 400));
      return;
    }

    try {
      const pageSpeedResponse = await this.pageSpeedService.getPageSpeedRanking(websiteUrl);
      res.json(pageSpeedResponse);
    } catch (e) {
      next(new _ErrorResponse.ErrorResponse("Internal Error", "Something went wrong with your request", 500));
    }
  }

}

exports.PageSpeedController = PageSpeedController;