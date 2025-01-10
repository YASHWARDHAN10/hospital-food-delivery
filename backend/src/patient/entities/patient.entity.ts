import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DietChart } from '../diet-chart/diet-chart.entity';
import { Delivery } from '../delivery/delivery.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => DietChart, dietChart => dietChart.patient)
  dietCharts: DietChart[];

  @OneToMany(() => Delivery, delivery => delivery.patient)
  deliveries: Delivery[];
}
