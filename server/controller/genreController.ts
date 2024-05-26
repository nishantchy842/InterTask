import { NextFunction, Request, Response } from "express";
import { genreRepo } from "../helper/repo";
import { AppError } from "../handler/customeErrorHandler";

export const createGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "title is required",
        status: false,
      });
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

interface DeleteResponse {
  message: string;
  status: boolean;
}

export const deleteGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<DeleteResponse> | void> => {
  try {
    const { id } = req.params;

    const data = await genreRepo.delete(id);

    if (data.affected === 0) {
      throw new AppError("Genre not found", 404);
    }

    return res.status(200).json({
      message: "Deleted successfully",
      status: true,
    });
  } catch (error) {
    next(error);
  }
};
