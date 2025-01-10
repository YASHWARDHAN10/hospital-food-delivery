import { Injectable } from '@nestjs/common';
import { CreateDietChartDto } from './dto/create-diet-chart.dto';
import { UpdateDietChartDto } from './dto/update-diet-chart.dto';

@Injectable()
export class DietChartService {
  create(createDietChartDto: CreateDietChartDto) {
    return 'This action adds a new dietChart';
  }

  findAll() {
    return `This action returns all dietChart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dietChart`;
  }

  update(id: number, updateDietChartDto: UpdateDietChartDto) {
    return `This action updates a #${id} dietChart`;
  }

  remove(id: number) {
    return `This action removes a #${id} dietChart`;
  }
}
