import { Injectable } from '@nestjs/common';
import { CreateAssistedDto } from './dto/create-assisted.dto';
import { UpdateAssistedDto } from './dto/update-assisted.dto';

@Injectable()
export class AssistedService {
  create(createAssistedDto: CreateAssistedDto) {
    return 'This action adds a new assisted';
  }

  findAll() {
    return `This action returns all assisted`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assisted`;
  }

  update(id: number, updateAssistedDto: UpdateAssistedDto) {
    return `This action updates a #${id} assisted`;
  }

  remove(id: number) {
    return `This action removes a #${id} assisted`;
  }
}
