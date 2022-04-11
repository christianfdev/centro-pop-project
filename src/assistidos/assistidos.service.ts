import { Injectable } from '@nestjs/common';
import { CreateAssistidoDto } from './dto/create-assistido.dto';
import { UpdateAssistidoDto } from './dto/update-assistido.dto';

@Injectable()
export class AssistidosService {
  create(createAssistidoDto: CreateAssistidoDto) {
    return 'This action adds a new assistido';
  }

  findAll() {
    return `This action returns all assistidos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assistido`;
  }

  update(id: number, updateAssistidoDto: UpdateAssistidoDto) {
    return `This action updates a #${id} assistido`;
  }

  remove(id: number) {
    return `This action removes a #${id} assistido`;
  }
}
