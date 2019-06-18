import express from "express";
import { routingMiddleware } from "./app.routing";
import { errorMiddleware } from "./app.error";

const app = express();

app.use(routingMiddleware());
app.use(errorMiddleware);

export { app };
