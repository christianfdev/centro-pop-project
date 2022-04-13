import { Prisma } from '@prisma/client';

export class Functionary implements Prisma.FunctionaryUncheckedCreateInput{
  id?: number;
  name: string;
  cpf: string;
  occupation: string;
  rel?: Prisma.RelEvolFuncUncheckedCreateNestedManyWithoutFunctionaryInput;
}
