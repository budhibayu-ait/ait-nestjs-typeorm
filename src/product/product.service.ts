import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product: Product = new Product();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
   return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    //return this.productRepository.find();
      return this.productRepository.find({
        relations: {
            chart: true,
            category: true
        },
    })
  }
  

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product: Product = new Product();
    product.name = updateProductDto.name;
    product.description = updateProductDto.description;
   return this.productRepository.save(product);
  }

  remove(id: number) : Promise<{ affected?: number }>{
    return this.productRepository.delete(id);
  }
}
