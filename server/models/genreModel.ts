import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./baseModel";
import { MovieEntity } from "./movieModel";

@Entity()
export class GenreEntity extends BaseModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @ManyToOne(() => MovieEntity, (movie) => movie.genres)
  movies!: MovieEntity[];
}
