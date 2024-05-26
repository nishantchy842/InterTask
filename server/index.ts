import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { myDatasource } from "./config/dataSource";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

myDatasource
  .initialize()
  .then(() => console.log("Database connected"))
  .catch((e) => console.log("failed to connect database", e));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
