import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { ResourceNotFoundException } from './resource-not-found.exception';
import { Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { DuplicatedResourceException } from './duplicated-resource.exception';

@Catch(ResourceNotFoundException, QueryFailedError, DuplicatedResourceException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(ex: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

    if (ex instanceof ResourceNotFoundException) {
      status = HttpStatus.NOT_FOUND;
    }

    if (ex instanceof QueryFailedError) {
      status = HttpStatus.BAD_REQUEST;
    }

    if (ex instanceof DuplicatedResourceException) {
      status = HttpStatus.UNPROCESSABLE_ENTITY;
    }

    response.status(status).json({
      statusCode: status,
      message: ex.message,
      location: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
