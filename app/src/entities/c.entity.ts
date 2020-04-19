import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ADbModel } from './a.entity';

@Entity({ schema: 'public', name: 'c' })
export class CDbModel {
  @ManyToOne(() => ADbModel, { primary: true })
  @JoinColumn({ name: 'a_id' })
  a!: ADbModel;

  @Column({ type: 'text' })
  name!: string;
}
