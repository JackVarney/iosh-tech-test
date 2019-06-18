import { ErrorRequestHandler } from "express";
import { ErrorResponse } from "./core/ErrorResponse";

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  const isNotErrorResponse: boolean = !(err instanceof ErrorResponse);

  if (isNotErrorResponse) {
    err = new ErrorResponse(
      "Internal Error",
      "There was an error handling your request",
      500
    );
  }

  res.status((err as ErrorResponse).status);
  res.json(err as ErrorResponse);
};

export { errorMiddleware };
