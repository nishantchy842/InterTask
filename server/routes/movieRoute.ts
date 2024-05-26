import express from "express";
import { loadMovieData } from "../controller/movieController";

const router = express.Router();

router.post("/load", loadMovieData);

export default router;
