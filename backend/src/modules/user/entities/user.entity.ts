import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Gender, UserRole, IdentityType } from './user.enum';

@Entity({ name: 'Usuarios' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  cellphone: string;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @Column({ nullable: false })
  address: string;

  @Column({ type: 'enum', enum: IdentityType, nullable: false })
  identityType: IdentityType;

  @Index()
  @Column({ nullable: false })
  identityNumber: number;

  @Column({ type: 'enum', enum: Gender, nullable: false })
  gender: Gender;

  @Column({ nullable: false })
  birthdate: Date;

  @Column({ type: 'enum', enum: UserRole, nullable: false })
  role: UserRole;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
