import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_GUARD } from '@nestjs/core';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AssistedModule } from './modules/assisted/assisted.module';
import { EvolutionModule } from './modules/evolution/evolution.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { FamiliarModule } from './modules/familiar/familiar.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [AssistedModule, EvolutionModule, FamiliarModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
