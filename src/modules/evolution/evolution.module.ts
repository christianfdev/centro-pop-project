import { Module } from '@nestjs/common';
import { EvolutionService } from './evolution.service';
import { EvolutionController } from './evolution.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [EvolutionController],
  providers: [EvolutionService, PrismaService],
})
export class EvolutionModule {}
