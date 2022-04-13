import { Module } from '@nestjs/common';
import { AssistedService } from './assisted.service';
import { AssistedController } from './assisted.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [AssistedController],
  providers: [AssistedService, PrismaService],
  
})
export class AssistedModule {}
