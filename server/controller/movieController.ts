import axios from "axios";
import { Request, Response } from "express";
import { genreRepo, movieRepo } from "../helper/repo";
import { MovieEntity } from "../models/movieModel";
import { ILike } from "typeorm";
import { GenreEntity } from "../models/genreModel";

export const loadMovieData = async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://yts.mx/api/v2/list_movies.json");
    const data = response.data;

    // Get the list of movies from the API response
    const movies = data.data.movies;

    for (const movie of movies) {
      const {
        url,
        title,
        year,
        rating,
        summary,
        background_image_original,
        genres,
      } = movie;

      const dbgenres: GenreEntity[] = [];

      for (const genre of genres) {
        const g = await genreRepo.findOne({
          where: { title: genre },
        });

        if (g) {
          dbgenres.push(g);
        } else {
          const ge = await genreRepo.save({
            title: genre,
          });

          const a = await genreRepo.findOne({
            where: { title: ge.title },
          });

          a && dbgenres.push(a);
        }
      }

      const newMovie = movieRepo.create({
        title,
        url,
        rating,
        image: background_image_original,
        year,
        summary,
        genres: dbgenres,
      });

      await movieRepo.save(newMovie);
    }

    return res.status(200).json({ message: "Movies loaded successfully" });
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return res.status(500).json({ message: "Error fetching movie data" });
  }
};

//get all movie data
export const getAllMovie = async (
  req: Request,
  res: Response
): Promise<MovieEntity[] | any> => {
  try {
    const { title } = req.query;

    if (title) {
      const data = await movieRepo.find({
        relations: ["genres"],
        where: { title: ILike(`%${title}%`) },
      });

      return res.status(200).json({
        message: "api success",
        success: true,
        data,
      });
    }

    const data = await movieRepo.find({
      relations: ["genres"],
    });

    return res.status(200).json({
      success: true,
      message: "api successful",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

//get one movie
export const getSingleMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const data = await movieRepo.findOne({
      where: { id },
      relations: ["genres"],
    });

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "not found",
      });
    }

    return res.status(200).json({
      message: "api successful",
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

//new release
export const newReleaseMovie = async (req: Request, res: Response) => {
  try {
    const topNewReleases = await movieRepo.find({
      relations: ["genres"],
      order: { year: "DESC" },
    });

    return res.status(200).json({
      success: true,
      message: " new releases fetched successfully",
      data: topNewReleases,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

//top rated movies
export const topRatedMovie = async (req: Request, res: Response) => {
  try {
    const topRated = await movieRepo.find({
      relations: ["genres"],
      order: { rating: "DESC" },
    });
    return res.status(200).json({
      success: true,
      message: "Top  rated movie fetched successfully",
      data: topRated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const filterByGenre = async (req: Request, res: Response) => {
  try {
    const { genre } = req.params;

    const data = await movieRepo.find({
      relations: ["genres"],
      where: { genres: { title: genre } },
    });

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Top  rated movie fetched successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
