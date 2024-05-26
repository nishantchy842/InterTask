import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./baseModel";

@Entity()
export class GenreEntity extends BaseModel {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;
}
