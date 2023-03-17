import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { LoggerMiddleware } from '@/logger/logger.middleware';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: 'login', method: RequestMethod.GET }); // 指定某一个接口被拦截
    // consumer.apply(LoggerMiddleware).forRoutes(LoginController); // login内的所有接口都被拦截
  }
}
