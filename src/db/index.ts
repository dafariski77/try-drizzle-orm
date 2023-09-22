import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "../db/schema";

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "drizzle",
});

export const db = drizzle(connection, { schema, mode: "default" });
