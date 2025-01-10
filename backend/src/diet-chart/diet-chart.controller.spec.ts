import { Test, TestingModule } from '@nestjs/testing';
import { DietChartController } from './diet-chart.controller';
import { DietChartService } from './diet-chart.service';

describe('DietChartController', () => {
  let controller: DietChartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DietChartController],
      providers: [DietChartService],
    }).compile();

    controller = module.get<DietChartController>(DietChartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
