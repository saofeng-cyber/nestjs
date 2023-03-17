import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, '../assets'),
        filename: (_, file: Express.Multer.File, callback) => {
          const fileName = file.originalname;
          callback(null, fileName);
        },
      }),
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
