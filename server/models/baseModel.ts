import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class BaseModel {
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn({ nullable: true, default: null })
  updatedAt?: Date;

  @DeleteDateColumn({ nullable: true, default: null })
  deletedAt?: Date;
}
