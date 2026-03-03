import { errorHandler } from "./middlewares/error.middleware";
import express, { type Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/health", (_, res: Response) => {
  res.status(200).json({
    message: "Server is healthy!!!!",
  });
});

app.use(errorHandler);

export default app;
