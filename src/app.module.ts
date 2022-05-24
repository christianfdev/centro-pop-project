import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssistedModule } from './modules/assisted/assisted.module';
import { EvolutionModule } from './modules/evolution/evolution.module';
import { FamiliarModule } from './modules/familiar/familiar.module';
import { FunctionaryModule } from './modules/functionary/functionary.module';


@Module({
  imports: [AssistedModule, EvolutionModule, FamiliarModule, FunctionaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
