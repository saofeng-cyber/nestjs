import { HttpFilter } from '@/common/filter';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ResponseData } from '@/common/response';
import { middleware } from './middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true, logger: false });
  app.useGlobalInterceptors(new ResponseData());
  app.useGlobalFilters(new HttpFilter());
  app.use(middleware);
  app.useStaticAssets(join(__dirname, 'assets'), {
    prefix: '/sf',
  });
  await app.listen(3000);
}
bootstrap();
