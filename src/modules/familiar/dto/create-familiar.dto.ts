import { IsNumber, IsString } from 'class-validator';
import { Familiar } from '../entities/familiar.entity';

export class CreateFamiliarDto extends Familiar{

  @IsString()
  name: string;

  @IsString()
  phone_number?: string;
  
  @IsNumber()
  assistedId: number;
}
