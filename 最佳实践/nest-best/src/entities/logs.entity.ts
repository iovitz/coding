import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  method: string;

  @Column()
  req: string;

  @Column()
  res: string;

  @ManyToOne(() => Users, (user) => user.logs)
  // ManyToOne情况下可以省略JoinColumn
  @JoinColumn({
    name: 'uid',
  })
  user: Users;
}
