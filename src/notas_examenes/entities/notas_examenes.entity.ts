import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Materia } from 'src/materia/entities/materia.entity';

@Entity()
export class NotaExamen {

  @PrimaryGeneratedColumn()
  public idNota: number;

  @Column()
  public idAlumno: number;

  @Column()
  public nombre: string;

  @Column()
  public anio: string;

  @Column()
  public fechaNota: Date;

  @Column()
  public nota: number;

  @Column()
  public trimestre: number;



 
  @ManyToOne(() => Materia, materia => materia.nombre)
  materia: Materia[];
  // Otros atributos y métodos si es necesario
} 
  