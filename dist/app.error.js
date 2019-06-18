"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMiddleware = void 0;

var _ErrorResponse = require("./core/ErrorResponse");

const errorMiddleware = (err, req, res, next) => {
  const isNotErrorResponse = !(err instanceof _ErrorResponse.ErrorResponse);

  if (isNotErrorResponse) {
    err = new _ErrorResponse.ErrorResponse("Internal Error", "There was an error handling your request", 500);
  }

  res.status(err.status);
  res.json(err);
};

exports.errorMiddleware = errorMiddleware;