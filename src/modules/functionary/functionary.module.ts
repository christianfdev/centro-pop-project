import { Module } from '@nestjs/common';
import { FunctionaryService } from './functionary.service';
import { FunctionaryController } from './functionary.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [FunctionaryController],
  providers: [FunctionaryService, PrismaService],
})
export class FunctionaryModule {}
