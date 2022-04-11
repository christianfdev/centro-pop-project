import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssistedService } from './assisted.service';
import { CreateAssistedDto } from './dto/create-assisted.dto';
import { UpdateAssistedDto } from './dto/update-assisted.dto';

@Controller('assisted')
export class AssistedController {
  constructor(private readonly assistedService: AssistedService) {}

  @Post()
  create(@Body() createAssistedDto: CreateAssistedDto) {
    return this.assistedService.create(createAssistedDto);
  }

  @Get()
  findAll() {
    return this.assistedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assistedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssistedDto: UpdateAssistedDto) {
    return this.assistedService.update(+id, updateAssistedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assistedService.remove(+id);
  }
}
