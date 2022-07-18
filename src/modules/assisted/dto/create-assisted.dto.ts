import { IsOptional, IsString,  } from 'class-validator';
import { Assisted } from '../entities/assisted.entity';
import { Prisma } from '@prisma/client'


export class CreateAssistedDto extends Assisted {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  social_name?: string;

  
  @IsString()
  @IsOptional()
  mother_name?: string;

  
  @IsString()
  @IsOptional()
  father_name?: string;

  
  @IsString()
  @IsOptional()
  sex?: string;

  
  @IsString()
  @IsOptional()
  birth_data?: string;

  
  @IsString()
  @IsOptional()
  nationality?: string;

  
  @IsString()
  @IsOptional()
  phone_number?: string;

  
  @IsString()
  @IsOptional()
  city_residence?: string;

  
  @IsString()
  @IsOptional()
  rg?: string;

  
  @IsString()
  @IsOptional()
  org_e?: string;

  
  @IsString()
  @IsOptional()
  uf?: string;

  
  @IsString()
  @IsOptional()
  dt_e?: string;

  
  @IsString()
  @IsOptional()
  cpf?: string;

  
  @IsString()
  @IsOptional()
  reservist?: string;

  
  @IsString()
  @IsOptional()
  work_wallet?: string;

  
  @IsString()
  @IsOptional()
  birth_cert?: string;

  
  @IsString()
  @IsOptional()
  nis?: string;

  
  @IsString()
  @IsOptional()
  benefits?: string;

  @IsString()
  situation: string;

  
  @IsString()
  @IsOptional()
  schooling?: string;

  @IsString()
  relactory: string;


  @IsOptional()  
  familiar?: Prisma.FamiliarUncheckedCreateNestedManyWithoutAssistedInput

  @IsOptional()
  evolution?: Prisma.EvolutionUncheckedCreateNestedManyWithoutAssistedInput


}
