import { Functionary } from '../entities/functionary.entity';
import { Prisma } from '@prisma/client';

export class CreateFunctionaryDto extends Functionary{
  name: string;
  cpf: string;
  occupation: string;
  rel?: Prisma.RelEvolFuncUncheckedCreateNestedManyWithoutFunctionaryInput;
}
