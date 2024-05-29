import express, { Express, NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
import { myDatasource } from "./config/dataSource";
import genreRouter from "./routes/genreRoute";
import bodyParser from "body-parser";
// import errorHandler from "./middleware/errorMiddleware";
import movieRouter from "./routes/movieRoute";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";
import ErrorHandler from "./middleware/errorMiddleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

myDatasource
  .initialize()
  .then(() => console.log("Database connected"))
  .catch((e) => console.log("failed to connect database", e));

//Routes

app.use("/genre", genreRouter);
app.use("/movie", movieRouter);

// Catch-all route for handling invalid URLs
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: res.statusCode,
    message: "URL not found",
    success: false,
  });
});

app.use(ErrorHandler);

//swagger config
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
