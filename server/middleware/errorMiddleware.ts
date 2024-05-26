import { Request, Response, NextFunction } from "express";
import { AppError } from "../handler/customeErrorHandler";

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  console.error(err);

  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorHandler;
