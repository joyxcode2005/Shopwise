import "dotenv/config";
import express, { type Request, type Response } from "express";
import authRouter from "./routes/auth.routes";

const app = express();

const PORT = process.env.PORT || "";

// Server Health check route
app.get("/health", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Server is healthy!!!",
  });
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/v1/auth", authRouter);

// Listening the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
