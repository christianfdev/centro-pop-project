import { Module } from '@nestjs/common';
import { AssistidosService } from './assistidos.service';
import { AssistidosController } from './assistidos.controller';

@Module({
  controllers: [AssistidosController],
  providers: [AssistidosService]
})
export class AssistidosModule {}
