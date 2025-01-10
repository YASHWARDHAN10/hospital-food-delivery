import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Patient } from '../patient/patient.entity';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  timestamp: Date;

  @ManyToOne(() => Patient, patient => patient.deliveries)
  patient: Patient;
}
