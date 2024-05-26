import express from "express";
import { createGenre, deleteGenre } from "../controller/genreController";

const router = express.Router();

router.route("/").post(createGenre);
router.delete("/:id", deleteGenre);

export default router;
