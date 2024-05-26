import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;
}
