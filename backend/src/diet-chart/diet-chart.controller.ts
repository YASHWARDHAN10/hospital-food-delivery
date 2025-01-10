import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DietChartService } from './diet-chart.service';
import { CreateDietChartDto } from './dto/create-diet-chart.dto';
import { UpdateDietChartDto } from './dto/update-diet-chart.dto';

@Controller('diet-chart')
export class DietChartController {
  constructor(private readonly dietChartService: DietChartService) {}

  @Post()
  create(@Body() createDietChartDto: CreateDietChartDto) {
    return this.dietChartService.create(createDietChartDto);
  }

  @Get()
  findAll() {
    return this.dietChartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dietChartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDietChartDto: UpdateDietChartDto) {
    return this.dietChartService.update(+id, updateDietChartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dietChartService.remove(+id);
  }
}
