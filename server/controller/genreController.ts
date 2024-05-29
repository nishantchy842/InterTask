import { NextFunction, Request, Response } from "express";
import { genreRepo } from "../helper/repo";
import { AppError } from "../handler/customeErrorHandler";

export const sum = (a: any, b: any) => {
  return a + b;
};

export const createGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title } = req.body;

    if (!title) {
      throw new AppError("title is required", 400);
    }

    const data = genreRepo.create({
      title,
    });

    await genreRepo.save(data);

    return res.status(200).json({
      message: "created successfully",
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

//get all genre
export const listofgenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await genreRepo.find({
      order: { title: "ASC" },
    });

    return res.status(200).send({
      message: "api fetch",
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

interface DeleteResponse {
  message: string;
  status: boolean;
}

export const deleteGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const data = await genreRepo.findOne({ where: { id } });

    if (!data) {
      throw new AppError("Genre not found", 400);
    }

    const affect = await genreRepo.delete(id);

    if (affect.affected == 0) {
      return new AppError("failed to delete", 500);
    }

    return res.status(200).json({
      message: "Deleted successfully",
      status: true,
    });
  } catch (error) {
    next(error);
  }
};
