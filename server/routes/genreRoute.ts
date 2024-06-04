import express from "express";
import { genreController } from "../controller/genreController";

const router = express.Router();

router.route("/").post(genreController.createGenre);
router.route("/:id").patch(genreController.updateGenre);
router.route("/:id").delete(genreController.deleteGenre);
router.route("/:id").get(genreController.getSingleGenre);
router.get("/", genreController.getAllGenre);

export default router;
