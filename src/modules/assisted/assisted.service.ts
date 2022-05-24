import { Injectable } from '@nestjs/common';
import { CreateAssistedDto } from './dto/create-assisted.dto';
import { UpdateAssistedDto } from './dto/update-assisted.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AssistedService {

  constructor(private readonly prisma: PrismaService){}

  create(data: CreateAssistedDto) {
    return this.prisma.assisted.create({
      data,
    });
  }

  findAll() {
    return this.prisma.assisted.findMany();
  }

  findOne(id: number) {
    return this.prisma.assisted.findUnique({
      where: {
        id
      }
    });
  }

  update(id: number, data: UpdateAssistedDto) {
    return this.prisma.assisted.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.assisted.delete({
      where: {
        id
      }
    });
  }
}
