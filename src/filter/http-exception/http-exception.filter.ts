import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { request, Response } from 'express';
import { timestamp } from 'rxjs';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const clx = host.switchToHttp();
    const response = clx.getResponse<Response>();
    const request = clx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toString(),
      path: request.url,
      message: (exception as any).message || '',
    });

  }
}
