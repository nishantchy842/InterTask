import express from "express";
import {
  filterByGenre,
  getAllMovie,
  getSingleMovie,
  loadMovieData,
  newReleaseMovie,
  topRatedMovie,
} from "../controller/movieController";

const router = express.Router();

router.post("/load", loadMovieData);
router.get("/", getAllMovie);
router.route("/new").get(newReleaseMovie);
router.route("/toprated").get(topRatedMovie);
router.route("/genre/:genre").get(filterByGenre);
router.get("/:id", getSingleMovie);

export default router;
