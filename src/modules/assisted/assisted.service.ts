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
    return this.prisma.assisted.findMany({
      include: {
        evolution: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.assisted.findUnique({
      where: {
        id
      }
    });
  }

  findOneNotId(id: number) {
    return this.prisma.assisted.findUnique({
      where: {
        id,
      },
      select: {
        id: false,
        name: true,
        social_name: true,
        mother_name: true,
        father_name: true,
        sex: true,
        birth_data: true,
        nationality: true,
        phone_number: true,
        city_residence: true,
        rg: true,
        org_e: true,
        uf: true,
        dt_e: true,
        cpf: true,
        reservist: true,
        work_wallet: true,
        birth_cert: true,
        nis: true,
        benefits: true,
        situation: true,
        schooling: true,
        relactory: true,
      },
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
