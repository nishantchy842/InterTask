import express from "express";
import {
  createGenre,
  deleteGenre,
  listofgenre,
} from "../controller/genreController";

const router = express.Router();

router.route("/").post(createGenre);
router.route("/:id").delete(deleteGenre);
router.route("/").get(listofgenre);

export default router;
