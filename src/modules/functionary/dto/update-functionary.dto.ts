import { PartialType } from '@nestjs/mapped-types';
import { CreateFunctionaryDto } from './create-functionary.dto';

export class UpdateFunctionaryDto extends PartialType(CreateFunctionaryDto) {}
