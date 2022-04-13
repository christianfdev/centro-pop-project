import { PartialType } from '@nestjs/mapped-types';
import { CreateAssistedDto } from './create-assisted.dto';

export class UpdateAssistedDto extends PartialType(CreateAssistedDto) {}
