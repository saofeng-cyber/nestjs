import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from '@/login/login.module';
import { ConfigModule } from '@/config/config.module';
import { UploadModule } from './upload/upload.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormoptions } from './typeOrmOptions';

@Module({
  imports: [TypeOrmModule.forRoot(ormoptions), LoginModule, ConfigModule, UploadModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
