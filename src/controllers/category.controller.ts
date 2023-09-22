import { Request, Response } from "express";
import { db } from "../db";
import { category as categorySchema } from "../db/schema";
import { eq } from "drizzle-orm";
import { findOneCategory } from "../repositories/category.repository";

type IRequest = {
  id: number;
  name: string;
};

export const index = async (req: Request, res: Response) => {
  const categories = await db.query.category.findMany();

  return res
    .json({
      data: categories,
    })
    .status(200);
};

export const show = async (req: Request<IRequest>, res: Response) => {
  const { id } = req.params;

  const data = await findOneCategory(id);

  return res
    .json({
      data,
    })
    .status(200);
};

export const create = async (req: Request, res: Response) => {
  const { name } = req.body;

  const category = await db.insert(categorySchema).values({ name });

  const data = await db.query.category.findFirst({
    where: eq(categorySchema.id, category[0].insertId),
  });

  return res
    .json({
      data,
    })
    .status(201);
};

export const update = async (req: Request<IRequest>, res: Response) => {
  const { id } = req.params;

  const { name } = req.body;

  const category = await db
    .update(categorySchema)
    .set({
      name,
    })
    .where(eq(categorySchema.id, id));

  const data = await findOneCategory(id);

  return res
    .json({
      data,
    })
    .status(200);
};

export const destroy = async (req: Request<IRequest>, res: Response) => {
  const { id } = req.params;

  await db.delete(categorySchema).where(eq(categorySchema.id, id));

  return res
    .json({
      message: "Data deleted!",
    })
    .status(200);
};
