import { NextFunction, Request, Response } from "express";
import { genreServices } from "../services/genreServices";

export const sum = (a: any, b: any) => {
  return a + b;
};

class GenreController {
  async getAllGenre(req: Request, res: Response): Promise<Response> {
    try {
      const data = await genreServices.getAllGenre();
      return res.status(200).json({ data, success: true });
    } catch (error) {
      return res.status(500).json({ message: "Error fetching genres", error });
    }
  }

  async getSingleGenre(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> {
    try {
      const { id } = req.params;
      const genre = await genreServices.getSingleGenre(id);

      return res.status(200).json({
        data: genre,
      });
    } catch (error) {
      next(error);
    }
  }

  async createGenre(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> {
    try {
      const { title } = req.body;
      const genre = await genreServices.createGenre(title);

      return res.status(201).json({ data: genre });
    } catch (error) {
      next(error);
    }
  }

  async updateGenre(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> {
    try {
      const data = await genreServices.updateGenre(
        req.params.id,
        req.body.title
      );
      return res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async deleteGenre(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | any> {
    try {
      const data = await genreServices.deleteGenre(req.params.id);

      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

export const genreController = new GenreController();
