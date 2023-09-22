import express from "express";
import {
  create,
  destroy,
  index,
  show,
  update,
} from "../controllers/category.controller";

const route = express.Router();

route.get("/", index);
route.get("/:id", show);
route.post("/", create);
route.put("/:id", update);
route.delete("/:id", destroy);

export default route;