import { myDatasource } from "../config/dataSource";
import { GenreEntity } from "../models/genreModel";
import { MovieEntity } from "../models/movieModel";

export const genreRepo = myDatasource.getRepository(GenreEntity);
export const movieRepo = myDatasource.getRepository(MovieEntity);
