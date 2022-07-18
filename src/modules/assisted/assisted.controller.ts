import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Assignment } from '../auth/decorators/assignment.decorator';
import { AssignmentGuard } from '../auth/guards/assignment.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserAssignment } from '../user/user-assignment.enum';
import { AssistedService } from './assisted.service';
import { CreateAssistedDto } from './dto/create-assisted.dto';
import { UpdateAssistedDto } from './dto/update-assisted.dto';


@UseGuards(JwtAuthGuard, AssignmentGuard)
@Controller('assisted')
export class AssistedController {
  constructor(private readonly assistedService: AssistedService) {}

  @Assignment(UserAssignment.ORIENTADOR)
  @Get()
  findAll() {
    return this.assistedService.findAll();
  }

  @Assignment(UserAssignment.ORIENTADOR)
  @Post()
  create(@Body() createAssistedDto: CreateAssistedDto) {
    return this.assistedService.create(createAssistedDto);
  }

  @Assignment(UserAssignment.ORIENTADOR)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assistedService.findOne(+id);
  }

  @Assignment(UserAssignment.ORIENTADOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssistedDto: UpdateAssistedDto) {
    return this.assistedService.update(+id, updateAssistedDto);
  }

  @Assignment(UserAssignment.ORIENTADOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assistedService.remove(+id);
  }
}
