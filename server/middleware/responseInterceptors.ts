import { Request, Response, NextFunction } from "express";
import { responseMessage } from "../utils/responsemessage";

export const responseInterceptor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const originalSend = res.send;

  res.send = (body?: any): Response => {
    // Parse the original body if it is JSON
    let parsedBody;
    try {
      parsedBody = JSON.parse(body);
    } catch (e) {
      parsedBody = body;
    }

    // Format the response body

    const formattedBody = {
      message: responseMessage(res.statusCode),
      success: res.statusCode >= 200 && res.statusCode < 300 ? true : false,
      statusCode: res.statusCode,
      ...parsedBody,
    };

    // Call the original send method with the formatted body
    return originalSend.call(res, JSON.stringify(formattedBody));
  };

  next();
};
