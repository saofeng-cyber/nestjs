import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from '@/login/login.module';
import { ConfigModule } from '@/config/config.module';
import { UploadModule } from './upload/upload.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormoptions } from './typeOrmOptions';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
import { RouterModule } from './router/router.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormoptions), LoginModule, ConfigModule, UploadModule, AuthModule, RouterModule],
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
