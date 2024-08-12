
import { IsString, MinLength, IsNotEmpty, IsAlphanumeric} from 'class-validator';
export class CreateProductDto {

    @IsString()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    @MinLength(3, { message: 'Description must have atleast 3 characters.' })
    @IsAlphanumeric(null, {
      message: 'Description does not allow other than alpha numeric chars.',
    })
    description: string;
}
