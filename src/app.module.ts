import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssistidosModule } from './assistidos/assistidos.module';

@Module({
  imports: [AssistidosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
