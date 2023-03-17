import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response, Request } from 'express';

@Catch(HttpException)
export class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res: Response = ctx.getResponse();
    const req: Request = ctx.getRequest();
    const status = exception.getStatus();
    res.status(status).json({
      success: false,
      time: new Date(),
      data: exception.message,
      status,
      path: req.url,
    });
  }
}
