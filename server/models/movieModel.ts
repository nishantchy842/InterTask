import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GenreEntity } from "./genreModel";
import { BaseModel } from "./baseModel";

@Entity()
export class MovieEntity extends BaseModel {
  @PrimaryGeneratedColumn("uuid")
  id!: number;

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

  @OneToMany(() => GenreEntity, (genre) => genre.id)
  genres!: GenreEntity[];
}
