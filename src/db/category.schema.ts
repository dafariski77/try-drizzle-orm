import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const categorySchema = mysqlTable("categories", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }),
});
