import { Module } from '@nestjs/common';
import { DietChartService } from './diet-chart.service';
import { DietChartController } from './diet-chart.controller';

@Module({
  controllers: [DietChartController],
  providers: [DietChartService],
})
export class DietChartModule {}
