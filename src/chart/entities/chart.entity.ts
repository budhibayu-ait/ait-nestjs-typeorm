import { Product } from 'src/product/entities/product.entity';
import {  Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chart {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'integer'})
    quantity: number;
  
    @ManyToOne(() => Product, (product) => product.chart)
    product: Product;

}
