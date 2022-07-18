import { Evolution } from '../entities/evolution.entity';
import { IsNumber, IsString } from 'class-validator';

export class CreateEvolutionDto extends Evolution{
  
  @IsString()
  data: string;

  @IsString()
  description: string;

  @IsNumber()
  assistedId: number;

  @IsNumber()
  userId: number;
  
}
