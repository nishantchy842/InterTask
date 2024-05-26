import axios from "axios";
import { Request, Response } from "express";
import { genreRepo, movieRepo } from "../helper/repo";
export const loadMovieData = async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://yts.mx/api/v2/list_movies.json");
    const data = response.data;

    // Get the list of movies from the API response
    const movies = data.data.movies;

    // Find the genre by ID
    const genre = await genreRepo.findOne({
      where: { id: "a8a015d6-08bb-4b6d-924d-4d48a57a1b4f" },
    });

    // Check if the genre exists
    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    for (const movie of movies) {
      const { url, title, year, rating, summary, background_image_original } =
        movie;

      const newMovie = movieRepo.create({
        title,
        url,
        rating,
        image: background_image_original,
        year,
        summary,
        genres: [genre],
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
