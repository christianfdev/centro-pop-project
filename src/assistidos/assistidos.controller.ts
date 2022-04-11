import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssistidosService } from './assistidos.service';
import { CreateAssistidoDto } from './dto/create-assistido.dto';
import { UpdateAssistidoDto } from './dto/update-assistido.dto';

@Controller('assistidos')
export class AssistidosController {
  constructor(private readonly assistidosService: AssistidosService) {}

  @Post()
  create(@Body() createAssistidoDto: CreateAssistidoDto) {
    return this.assistidosService.create(createAssistidoDto);
  }

  @Get()
  findAll() {
    return this.assistidosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assistidosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssistidoDto: UpdateAssistidoDto) {
    return this.assistidosService.update(+id, updateAssistidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assistidosService.remove(+id);
  }
}
