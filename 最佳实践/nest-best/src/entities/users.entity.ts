import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Logs } from './logs.entity';
import { Roles } from './roles.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Logs, (log) => log.user)
  logs: Logs[];

  @ManyToMany(() => Roles, (role) => role.users)
  @JoinTable({
    name: 'user_roles',
  })
  roles: Roles[];
}
