import { Prisma } from '@prisma/client';

export class Assisted implements Prisma.AssistedUncheckedCreateInput{
  id?: number;
  name: string;
  situation: string;
  relactory: string;
}
