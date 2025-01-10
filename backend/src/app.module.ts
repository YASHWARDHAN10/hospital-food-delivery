import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './patient/patient.module';
import { DietChartModule } from './diet-chart/diet-chart.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'Superuser',
      password: 'postgres',
      database: 'hospital-food-delivery',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PatientModule,
    DietChartModule,
    DeliveryModule,
  ],
})
export class AppModule {}
