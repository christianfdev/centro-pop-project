import { Prisma } from '@prisma/client';

export class Assisted implements Prisma.AssistedUncheckedCreateInput{
  id?: number;
  name: string;
  social_name?: string | null
  mother_name?: string | null
  father_name?: string | null
  sex?: string | null
  birth_data?: string | null
  nationality?: string | null
  phone_number?: string | null
  city_residence?: string | null
  rg?: string | null
  org_e?: string | null
  uf?: string | null
  dt_e?: string | null
  cpf?: string | null
  reservist?: string | null
  work_wallet?: string | null
  birth_cert?: string | null
  nis?: string | null
  benefits?: string | null
  situation: string;
  schooling?: string | null
  relactory: string;
  familiar?: Prisma.FamiliarUncheckedCreateNestedManyWithoutAssistedInput
  evolution?: Prisma.EvolutionUncheckedCreateNestedManyWithoutAssistedInput
}

