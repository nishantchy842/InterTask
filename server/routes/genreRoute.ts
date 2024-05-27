import express from "express";
import {
  createGenre,
  deleteGenre,
  listofgenre,
} from "../controller/genreController";

const router = express.Router();

router.route("/").post(createGenre);
router.route("/").get(listofgenre);
router.delete("/:id", deleteGenre);

export default router;
