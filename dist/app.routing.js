"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routingMiddleware = void 0;

var _express = _interopRequireDefault(require("express"));

var _pageSpeed = require("./api/page-speed/page-speed.controller");

var _pageSpeed2 = require("./api/page-speed/page-speed.service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routingMiddleware = () => {
  const router = _express.default.Router();

  router.use("/page-speed", new _pageSpeed.PageSpeedController(new _pageSpeed2.PageSpeedService()).getRouter());
  return router;
};

exports.routingMiddleware = routingMiddleware;