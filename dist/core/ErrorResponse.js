"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorResponse = void 0;

class ErrorResponse {
  constructor(title, message, status) {
    this.title = title;
    this.message = message;
    this.status = status;
  }

}

exports.ErrorResponse = ErrorResponse;