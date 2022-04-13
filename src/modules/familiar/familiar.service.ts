import { Injectable } from '@nestjs/common';
import { CreateFamiliarDto } from './dto/create-familiar.dto';
import { UpdateFamiliarDto } from './dto/update-familiar.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FamiliarService {

  constructor(private readonly prisma: PrismaService){}


  create(data: CreateFamiliarDto) {
    return this.prisma.familiar.create({
      data,
    });
  }

  findAll() {
    return this.prisma.familiar.findMany();
  }

  findOne(id: number) {
    return this.prisma.familiar.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateFamiliarDto) {
    return this.prisma.familiar.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.familiar.delete({
      where: { id },
    });
  }
}
