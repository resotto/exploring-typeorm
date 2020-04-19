import { Entity, JoinColumn, Column, OneToOne } from 'typeorm';
import { ADbModel } from './a.entity';

@Entity({ schema: 'public', name: 'b' })
export class BDbModel {
  @OneToOne(() => ADbModel, { primary: true })
  @JoinColumn({ name: 'a_id' })
  a!: ADbModel;

  @Column({ type: 'text' })
  name!: string;
}
