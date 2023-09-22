import express from "express";
import categoryRoute from "./category.route";

const route = express.Router();

route.use("/category", categoryRoute);

export default route;
