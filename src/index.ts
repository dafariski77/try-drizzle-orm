import express, { Request, Response } from "express";
import categoryRoute from "./routes";
import cors from "cors";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response): Response => {
  const { name } = req.query;

  return res
    .json({
      data: {
        name,
      },
    })
    .status(200);
});

app.use("/api/v1", categoryRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
