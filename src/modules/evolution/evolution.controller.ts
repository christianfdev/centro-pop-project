import { Controller, Get, Post, Body, Patch, Param, Delete, Header } from '@nestjs/common';
import { EvolutionService } from './evolution.service';
import { CreateEvolutionDto } from './dto/create-evolution.dto';
import { UpdateEvolutionDto } from './dto/update-evolution.dto';

@Controller('evolution')
export class EvolutionController {
  constructor(private readonly evolutionService: EvolutionService) {}

  @Post()
  create(@Body() createEvolutionDto: CreateEvolutionDto) {
    return this.evolutionService.create(createEvolutionDto);
  }

  /* @Get()
  findAll() {
    return this.evolutionService.findAll();
  } */

  @Get('assisted/:assistedId')
  findAllByAssisted(@Param('assistedId') assistedId: string) {
    return this.evolutionService.findAllByAssisted(+assistedId);
  }

  @Get('functionary/:functionaryId')
  findAllByFunctionary(@Param('functionaryId') functionaryId: string) {
    return this.evolutionService.findAllByFunctionary(+functionaryId);
  }

/* 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evolutionService.findOne(+id);
  } */

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvolutionDto: UpdateEvolutionDto) {
    return this.evolutionService.update(+id, updateEvolutionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evolutionService.remove(+id);
  }
}
