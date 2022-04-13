import { Assisted } from '../entities/assisted.entity';

export class CreateAssistedDto extends Assisted {
  name: string;
  situation: string;
  relactory: string;
}
