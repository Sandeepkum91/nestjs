import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const clx = host.switchToHttp();
    const response = clx.getResponse<Response>();
    const req = clx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toString(),
      path: (req as unknown as Record<string, unknown>).url || '',
      message: exception.message || '',
    });
  }
}
