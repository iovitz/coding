import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @ManyToMany(() => Users, (user) => user.roles)
  users: Users[];
}
