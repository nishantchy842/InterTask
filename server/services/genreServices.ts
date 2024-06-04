import { AppError } from "../handler/customeErrorHandler";
import { genreRepo } from "../helper/repo";
import { GenreEntity } from "../models/genreModel";

class GenreServices {
  async getAllGenre(): Promise<GenreEntity[]> {
    const data = await genreRepo.find({
      order: { title: "ASC" },
    });
    return data;
  }

  async getSingleGenre(id: string): Promise<GenreEntity | any> {
    const genre = await genreRepo.findOne({
      where: { id },
    });

    if (!genre) {
      throw new AppError("", 404);
    }

    return genre;
  }

  async createGenre(title: string): Promise<any> {
    if (!title) {
      throw new AppError("title is required", 400);
    }

    const existingGenre = await genreRepo.findOne({
      where: { title },
    });

    if (existingGenre) {
      throw new AppError("Already exists", 403);
    }

    const data = genreRepo.create({
      title,
    });

    await genreRepo.save(data);

    return data;
  }

  async updateGenre(id: string, title: string): Promise<any> {
    const genre = await genreRepo.findOne({ where: { id } });

    if (!genre) {
      throw new AppError("genre not found", 404);
    }

    const data = await genreRepo.update(id, {
      title,
    });

    return data;
  }

  async deleteGenre(id: string): Promise<any> {
    const genre = await this.getSingleGenre(id);

    if (!genre) {
      throw new AppError("genre Not found", 404);
    }

    const data = await genreRepo.delete(id);

    return data;
  }
}

export const genreServices = new GenreServices();
