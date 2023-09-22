import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { category } from "./schema";

export const productSchema = mysqlTable("products", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
  categoryId: int("category_id").references(() => category.id),
});
