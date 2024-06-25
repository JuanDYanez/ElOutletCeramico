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
  contraseña: string;

  @Column({ nullable: false })
  telefono: string;

  @Column({ nullable: false })
  nombres: string;

  @Column({ nullable: false })
  apellido: string;

  @Column({ nullable: false })
  direccion: string;

  @Column({ type: 'enum', enum: IdentityType, nullable: false })
  tipoDeIdentidad: IdentityType;

  @Index()
  @Column({ unique: true, nullable: false })
  numeroDeIdentidad: number;

  @Column({ type: 'enum', enum: Gender, nullable: false })
  genero: Gender;

  @Column({ nullable: false })
  fechaDeNacimiento: Date;

  @Column({ type: 'enum', enum: UserRole, nullable: false })
  rol: UserRole;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  creado: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  eliminado?: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  actualizado: Date;
}
