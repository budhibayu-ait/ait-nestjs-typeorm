import { Injectable } from '@nestjs/common';
import { CreateChartDto } from './dto/create-chart.dto';
import { UpdateChartDto } from './dto/update-chart.dto';
import { Chart } from './entities/chart.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { CheckoutChartDto } from './dto/checkout-chart.dto';

@Injectable()
export class ChartService {
  constructor(
  @InjectRepository(Chart) private readonly chartRepository: Repository<Chart>,
) {}
  create(createChartDto: CreateChartDto) {
    const chart: Chart = new Chart();
    chart.quantity = createChartDto.quantity;
    const product: Product = new Product();
    product.id = createChartDto.productId;
    chart.product = product;
   return this.chartRepository.save(chart);
  }

  findAll():Promise<Chart[]> {
    return this.chartRepository.find({
      relations: {
          product: true,
      },
  })
}

  findOne(id: number): Promise<Chart> {
    return this.chartRepository.findOneBy({ id });
  }

  update(id: number, updateChartDto: UpdateChartDto) {
    const chart: Chart = new Chart();
    chart.quantity = updateChartDto.quantity;
    const product: Product = new Product();
    product.id = updateChartDto.productId;
    chart.product = product;
   return this.chartRepository.save(chart);
  }

  remove(id: number) : Promise<{ affected?: number }>{
    return this.chartRepository.delete(id);
  }

  async checkout(checkoutChartDto: CheckoutChartDto) {
    //asumption is a bank transfer api
     fetch('https://jsonplaceholder.typicode.com/todos/1')//asumption is a bank transfer api
      .then(response => response.json())
      .then(json => console.log(json))
      if (checkoutChartDto.account == 9999999999){
        return "payment success";
      }
      return "payment failed";
  }
}
