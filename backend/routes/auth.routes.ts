import { Router, type Request, type Response } from "express";
import { UserSignupSchema } from "../types/auth.types";

const router = Router();

// User sigup route
router.post("/signup", (req: Request, res: Response) => {
  try {
    // Parse the body data using zod
    const { success, error, data } = UserSignupSchema.safeParse(req.body);

    if (!success) {
      const parsedErrors = JSON.parse(error.message);
      const formattedErrors = parsedErrors.map((err: any) => ({
        message: err.message,
      }));

      return res.status(402).json({
        success: false,
        message: "Invalid Input!!",
        error: formattedErrors,
      });
    }

    // Destructure the data
    const { email, password, name } = data;

    // Check if user already exists

    return res.status(200).json({
      success: true,
      message: "Singup Successfull!!!",
    });
  } catch (error) {
    console.error("Error occurred in singup route: ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!!!",
    });
  }
});

export default router;
