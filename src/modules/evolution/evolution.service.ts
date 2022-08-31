import { Injectable } from '@nestjs/common';
import { CreateEvolutionDto } from './dto/create-evolution.dto';
import { UpdateEvolutionDto } from './dto/update-evolution.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EvolutionService {

  constructor(private readonly prisma: PrismaService){}

  create(data: CreateEvolutionDto) {
    return this.prisma.evolution.create({
      data,
    });
  }

  findAll() {
    return this.prisma.evolution.findMany();
  }

  findAllForAssistent() {
    return this.prisma.evolution.findMany({
      where: {
        OR: [
          {
            demand: 'AUXÍLIO'
          },
          {
            demand: 'CESTA BÁSICA'
          }
        ]
      }
    })
  }

  findAllByAssisted(assistedId: number){
    return this.prisma.evolution.findMany({
      where: { assistedId: assistedId },
    })
  }

  findAllByUser(userId: number){
    return this.prisma.evolution.findMany({
      where: { userId: userId },
    })
  }

  findOne(id: number) {
    return this.prisma.evolution.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateEvolutionDto) {
    return this.prisma.evolution.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.evolution.delete({
      where: { id },
    });
  }
}
