import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { BDbModel } from './b.entity';

@Entity({ schema: 'public', name: 'a' })
export class ADbModel {
  @PrimaryGeneratedColumn({ name: 'a_id' })
  id!: number;

  @Column({ type: 'text' })
  name!: string;

  @OneToOne(() => BDbModel, (b) => b.a)
  // @OneToOne(() => BDbModel) // this also worked
  b!: BDbModel;
}
