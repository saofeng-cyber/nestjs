import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request, Response } from 'express';
import { map, Observable } from 'rxjs';
@Injectable()
export class ResponseDataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const app = context.switchToHttp();
    const req: Request = app.getRequest();
    const res: Response = app.getResponse();
    const { url } = req;
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          status: res.statusCode,
          msg: 'ok!',
          success: true,
          url,
        };
      }),
    );
  }
}
