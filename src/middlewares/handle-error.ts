import { ErrorRequestHandler } from "express";

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log("error");
  console.log(err.message);

  let customError = {
    statusCode: err.statusCode || 500,
    msg: err.message || "Internal server error!",
  };

  return res.status(customError.statusCode).json({ error: customError.msg });
};

export default errorHandlerMiddleware;
