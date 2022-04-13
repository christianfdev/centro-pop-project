import { Prisma } from '@prisma/client';

export class Familiar implements Prisma.FamiliarUncheckedCreateInput{
  id?: number;
  name: string;
  phone_number?: string;
  assistedId?: number;
}
