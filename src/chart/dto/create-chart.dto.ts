import { IsString, MinLength, IsNotEmpty, IsAlphanumeric, IsInt} from 'class-validator';
export class CreateChartDto {
    
    @IsInt()
    @MinLength(1, { message: 'Must have atleast 1 quantity.' })
    @IsNotEmpty()
    quantity: number;
  
    @IsInt()
    @MinLength(1, { message: 'Must have atleast 1 product.' })
    @IsNotEmpty()
    productId: number;
}
