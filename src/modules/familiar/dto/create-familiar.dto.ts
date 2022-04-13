import { Familiar } from '../entities/familiar.entity';

export class CreateFamiliarDto extends Familiar{
  name: string;
  phone_number?: string;
  assistedId?: number;
}
