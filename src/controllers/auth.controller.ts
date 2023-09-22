import { NextFunction, Request, Response } from "express";
import { registerUser } from "../services/auth.service";

type IRequest = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const register = async (
  req: Request<IRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await registerUser(req);

    return res
      .json({
        data: user,
      })
      .status(200);
  } catch (err) {
    next(err);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
};
