import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Assignment } from '../auth/decorators/assignment.decorator';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { AssignmentGuard } from '../auth/guards/assignment.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserAssignment } from './user-assignment.enum';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard, /*AssignmentGuard*/)
  //@Assignment(UserAssignment.ADMINISTRADOR)
  @UseGuards(JwtAuthGuard)
  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
  return this.userService.findAll();
  }

  @IsPublic()
  @Get('/info/:id')
  findInfo(@Param('id') id:string){
    return this.userService.findInfo(+id);
  }


  //Editar GET, está retornando informações além do que deve
  @Assignment([UserAssignment.ADMINISTRADOR])
  @Get(':id')
  findOne(@Param('id') id: string) {
  return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}








