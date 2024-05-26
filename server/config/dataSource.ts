import { DataSource } from "typeorm";
import { MovieEntity } from "../models/movieModel";
import { GenreEntity } from "../models/genreModel";

export const myDatasource = new DataSource({
  type: "postgres",
  username: "postgres",
  host: "localhost",
  password: "nishant@123",
  port: 3030,
  database: "movieDb",
  entities: [MovieEntity, GenreEntity],
  logging: false,
  synchronize: true,
});
