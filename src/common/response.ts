import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
interface Data<T> {
  data: T;
}
@Injectable()
export class ResponseData<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Data<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          status: 200,
          msg: 'ok!',
          success: true,
        };
      }),
    );
  }
}
