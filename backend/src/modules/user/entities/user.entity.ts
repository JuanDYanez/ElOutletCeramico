import { Entity, Column } from 'typeorm';

@Entity()
class User {
  @Column()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cellphone: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  address: string;

  @Column()
  country: string;

  @Column()
  identityType: string;

  @Column()
  identity: number;

  @Column()
  gender: string;

  @Column()
  birthdate: Date;

  @Column()
  createdAt: Date;
}
