import express, { Request, Response } from "express";
import route from "./routes";
import cors from "cors";
import morgan from "morgan";

import notFoundMiddleware from "./middlewares/not-found";
import errorHandlerMiddleware from "./middlewares/handle-error";

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

app.use("/api/v1", route);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
