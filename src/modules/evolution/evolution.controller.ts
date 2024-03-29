import { Controller, Get, Post, Body, Patch, Param, Delete, Header, UseGuards } from '@nestjs/common';
import { EvolutionService } from './evolution.service';
import { CreateEvolutionDto } from './dto/create-evolution.dto';
import { UpdateEvolutionDto } from './dto/update-evolution.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AssignmentGuard } from '../auth/guards/assignment.guard';
import { Assignment } from '../auth/decorators/assignment.decorator';
import { UserAssignment } from '../user/user-assignment.enum';

@UseGuards(JwtAuthGuard, AssignmentGuard)
@Controller('evolution')
export class EvolutionController {
  constructor(private readonly evolutionService: EvolutionService) {}

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Post()
  create(@Body() createEvolutionDto: CreateEvolutionDto) {
    return this.evolutionService.create(createEvolutionDto);
  }

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Get('assisted/:assistedId')
  findAllByAssisted(@Param('assistedId') assistedId: string) {
    return this.evolutionService.findAllByAssisted(+assistedId);
  }

  @Assignment([UserAssignment.ASSISTENTE])
  @Get('demands')
  findAllForAssistent() {
    return this.evolutionService.findAllForAssistent();
  }

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Get('user/:userId')
  findAllByUser(@Param('userId') userId: string) {
    return this.evolutionService.findAllByUser(+userId);
  }

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvolutionDto: UpdateEvolutionDto) {
    return this.evolutionService.update(+id, updateEvolutionDto);
  }

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evolutionService.remove(+id);
  }
}
