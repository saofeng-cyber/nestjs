// import { MyValidationPipe } from './validation/my.validation.pipe';
import { HttpFilter } from '@/common/filter';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ResponseDataInterceptor } from '@/common/response';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { middleware } from './middleware';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  // 全局使用管道：这里使用的是内置，也可以使用自定义管道，在下文
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false, // 过滤不需要的dto
      transform: true, // 自动转换所需要的数据类型
      forbidNonWhitelisted: false, // 与所需参数不一致就停止请求
    }),
  );
  // 全局使用中间件
  app.use(middleware);
  // 全局守卫
  app.useGlobalInterceptors(new ResponseDataInterceptor());
  app.useGlobalFilters(new HttpFilter());
  app.useStaticAssets(join(__dirname, 'assets'), {
    prefix: '/sf',
  });
  // const config = new DocumentBuilder()
  //   .setTitle('Admin Example')
  //   .setDescription('The admin API description')
  //   .setVersion('1.0')
  //   .addTag('api')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
  app.use(session({ secret: 'saofeng', name: 'sf.session', rolling: true, cookie: { maxAge: null } }));
  await app.listen(3000);
}
bootstrap();
