import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssistedModule } from './assisted/assisted.module';

@Module({
  imports: [AssistedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
