import { db } from "../db";
import { category as categorySchema } from "../db/schema";
import { eq } from "drizzle-orm";

export const findOneCategory = async (id: number) => {
  const data = await db.query.category.findFirst({
    where: eq(categorySchema.id, id),
  });

  return data;
};
