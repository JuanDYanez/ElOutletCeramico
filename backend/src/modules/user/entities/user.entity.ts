import { Entity, Column } from 'typeorm';

@Entity()
class User {
  @Column({unique: true, nullable: false})
  id: number;

  @Column({unique: true, nullable: false})
  email: string;

  @Column({nullable: false})
  password: string;

  @Column({nullable: false})
  cellphone: string;

  @Column({nullable:false})
  firstname: string;

  @Column({nullable:false})
  lastname: string;

  @Column({nullable:false})
  address: string;

  @Column({nullable:false})
  country: string;

  @Column({nullable:false})
  identityType: string;

  @Column({unique: true, nullable: false})
  identity: number;

  @Column({nullable:false})
  gender: string;

  @Column({nullable:false})
  birthdate: Date;

  @Column({nullable:false})
  createdAt: Date;
}
