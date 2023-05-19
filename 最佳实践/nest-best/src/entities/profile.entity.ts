import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  avatar: string;

  @Column()
  homePhoto: string;

  @Column()
  address: string;

  @OneToOne(() => Users)
  @JoinColumn({
    name: 'uid',
  })
  user: Users;
}
