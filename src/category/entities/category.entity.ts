import { Product } from 'src/product/entities/product.entity';
import {  Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar'})
    name: string;
  
    @ManyToOne(() => Product, (product) => product.category)
    product: Product;

}
