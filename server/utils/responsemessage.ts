export const responseMessage = (statusCode: number): string => {
  const message: any = {
    200: "ok",
    201: "Created successfully",
    202: "Accepted",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
  };

  return message[statusCode] || "status code required";
};
