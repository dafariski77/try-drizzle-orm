import { int, mysqlTable, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const userSchema = mysqlTable(
  "users",
  {
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    email: varchar("email", { length: 256 }),
    password: varchar("password", { length: 256 }),
  },
  (users) => ({
    emailIndex: uniqueIndex("email_idx").on(users.email),
  })
);
