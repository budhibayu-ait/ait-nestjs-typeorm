import { Category } from 'src/category/entities/category.entity';
import { Chart } from 'src/chart/entities/chart.entity';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 50 })
    name: string;
  
    @Column({ type: 'varchar', length: 100 })
    description: string;

    @OneToMany(() => Chart, (chart) => chart.product)
    chart: Chart[]

    @OneToMany(() => Category, (category) => category.product)
    category: Category[]
}
