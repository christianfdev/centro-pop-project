import { Prisma } from '@prisma/client';

export class Evolution implements Prisma.EvolutionUncheckedCreateInput{
  id?: number;
  data: string;
  demand: string;
  description: string;
  status: string;
  quantity: number;
  assistedId?: number;
  functionaryId?: number;
}
