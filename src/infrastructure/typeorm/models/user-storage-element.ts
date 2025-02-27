import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('User')
export class UserStorageElement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName?: string;

  @Column()
  username?: string;
}
