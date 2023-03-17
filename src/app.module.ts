import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from '@/login/login.module';
import { ConfigModule } from '@/config/config.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [LoginModule, ConfigModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
