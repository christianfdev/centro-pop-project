import { Evolution } from '../entities/evolution.entity';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEvolutionDto extends Evolution{
  
  @IsString()
  data: string;

  @IsString()
  demand: string;

  
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  status: string;
  
  @IsOptional()
  @IsNumber()
  quantity: number;

  @IsNumber()
  assistedId: number;

  @IsNumber()
  userId: number;


  
}
