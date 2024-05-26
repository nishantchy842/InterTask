import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { myDatasource } from "./config/dataSource";
import genreRouter from "./routes/genreRoute";
import bodyParser from "body-parser";
import errorHandler from "./middleware/errorMiddleware";
import movieRouter from "./routes/movieRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

myDatasource
  .initialize()
  .then(() => console.log("Database connected"))
  .catch((e) => console.log("failed to connect database", e));

app.use(errorHandler);

//Routes

app.use("/genre", genreRouter);
app.use("/movie", movieRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
