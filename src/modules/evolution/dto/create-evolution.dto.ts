import { Evolution } from '../entities/evolution.entity';
import { Prisma } from '@prisma/client';

export class CreateEvolutionDto extends Evolution{
  data: string;
  description: string;
  assistedId?: number;
  functionaryId?: number;
  
}
