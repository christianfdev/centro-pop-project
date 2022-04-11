import { Module } from '@nestjs/common';
import { AssistedService } from './assisted.service';
import { AssistedController } from './assisted.controller';

@Module({
  controllers: [AssistedController],
  providers: [AssistedService]
})
export class AssistedModule {}
