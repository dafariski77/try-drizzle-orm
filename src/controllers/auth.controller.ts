import { Request, Response } from "express";
import { user as userSchema } from "../db/schema";
import { db } from "../db";
import { hashPassword } from "../utils/hashPassword";

type IRequest = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const register = async (req: Request<IRequest>, res: Response) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res
      .json({
        message: "Invalid Credentials!",
      })
      .status(400);
  }

  const hashedPassword = await hashPassword(password);

  const user = await db
    .insert(userSchema)
    .values({ email, name, password: hashedPassword });

  return res
    .json({
      data: user,
    })
    .status(200);
};
