import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { ChartModule } from './chart/chart.module';
import { Chart } from './chart/entities/chart.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      entities: [Product,Chart],
      database: 'postgres2',
      schema: 'test',
      synchronize: true,
      logging: true,
    }),
    ProductModule,
    ChartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
