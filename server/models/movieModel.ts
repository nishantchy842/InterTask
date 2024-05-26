import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GenreEntity } from "./genreModel";

@Entity()
export class MovieEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  url!: string;

  @Column()
  title!: string;

  @Column()
  year!: Date;

  @Column()
  rating!: number;

  @Column()
  summary!: string;

  @Column()
  image!: string;

  @OneToMany(() => GenreEntity, (genre) => genre.id)
  genres!: GenreEntity[];
}
