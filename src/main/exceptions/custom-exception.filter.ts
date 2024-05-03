import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { RestaurantNotFoundException } from './restaurant-not-found.exception';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(RestaurantNotFoundException, QueryFailedError)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception instanceof RestaurantNotFoundException) {
      status = HttpStatus.NOT_FOUND;
    }

    if (exception instanceof QueryFailedError) {
      status = HttpStatus.BAD_REQUEST;
    }

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      location: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
