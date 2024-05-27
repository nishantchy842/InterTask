import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GenreEntity } from "./genreModel";
import { BaseModel } from "./baseModel";

@Entity()
export class MovieEntity extends BaseModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  url!: string;

  @Column()
  title!: string;

  @Column()
  year!: number;

  @Column("float")
  rating!: number;

  @Column()
  summary!: string;

  @Column()
  image!: string;

  @ManyToMany(() => GenreEntity, (genre) => genre.movies)
  @JoinTable()
  genres!: GenreEntity[];
}
