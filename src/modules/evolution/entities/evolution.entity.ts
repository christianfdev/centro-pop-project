import { Prisma } from '@prisma/client';

export class Evolution implements Prisma.EvolutionUncheckedCreateInput{
  id?: number;
  data: string;
  description: string;
  assistedId?: number;
  functionaryId?: number;
}
