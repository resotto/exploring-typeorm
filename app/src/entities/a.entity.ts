import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BDbModel } from './b.entity';

@Entity({ schema: 'public', name: 'a' })
export class ADbModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string;

  b!: BDbModel;
}
