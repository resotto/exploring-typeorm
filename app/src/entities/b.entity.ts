import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ADbModel } from './a.entity';

@Entity({ schema: 'public', name: 'b' })
export class BDbModel {
  @ManyToOne(() => ADbModel, { primary: true })
  @JoinColumn({ name: 'id' })
  a!: ADbModel;

  @Column({ type: 'text' })
  name!: string;
}
