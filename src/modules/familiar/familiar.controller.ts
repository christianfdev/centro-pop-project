import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FamiliarService } from './familiar.service';
import { CreateFamiliarDto } from './dto/create-familiar.dto';
import { UpdateFamiliarDto } from './dto/update-familiar.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AssignmentGuard } from '../auth/guards/assignment.guard';
import { Assignment } from '../auth/decorators/assignment.decorator';
import { UserAssignment } from '../user/user-assignment.enum';

@UseGuards(JwtAuthGuard, AssignmentGuard)
@Controller('familiar')
export class FamiliarController {
  constructor(private readonly familiarService: FamiliarService) {}

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Post()
  create(@Body() createFamiliarDto: CreateFamiliarDto) {
    return this.familiarService.create(createFamiliarDto);
  }

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Get()
  findAll() {
    return this.familiarService.findAll();
  }

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familiarService.findOne(+id);
  }

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFamiliarDto: UpdateFamiliarDto) {
    return this.familiarService.update(+id, updateFamiliarDto);
  }

  @Assignment([UserAssignment.ORIENTADOR, UserAssignment.ASSISTENTE])
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.familiarService.remove(+id);
  }
}
