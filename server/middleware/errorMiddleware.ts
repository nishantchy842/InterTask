import { NextFunction, Request, Response } from "express";
import { AppError } from "../handler/customeErrorHandler";
import { responseMessage } from "../utils/responsemessage";

// ErrorHandler.js
const ErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  res.status(errStatus).json({
    message: err.message || responseMessage(err.statusCode),
  });
};

export default ErrorHandler;
