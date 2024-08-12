import { Module } from '@nestjs/common';
import { ChartService } from './chart.service';
import { ChartController } from './chart.controller';
import { Chart } from './entities/chart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Chart])],
  controllers: [ChartController],
  providers: [ChartService],
})
export class ChartModule {}
