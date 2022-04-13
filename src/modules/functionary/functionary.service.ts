import { Injectable } from '@nestjs/common';
import { CreateFunctionaryDto } from './dto/create-functionary.dto';
import { UpdateFunctionaryDto } from './dto/update-functionary.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FunctionaryService {

  constructor(private readonly prisma: PrismaService){}

  create(data: CreateFunctionaryDto) {
    return this.prisma.functionary.create({
      data,
    });
  }

  findAll() {
    return this.prisma.functionary.findMany();
  }

  findOne(id: number) {
    return this.prisma.functionary.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateFunctionaryDto) {
    return this.prisma.functionary.update({
      where: { id: id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.functionary.delete({
      where: { id },
    });
  }
}
