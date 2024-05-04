import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  UseFilters,
} from '@nestjs/common';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import { RestaurantEraser } from '../services/restaurant-eraser';
import {
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantDeleteController {
  constructor(private readonly restaurantEraser: RestaurantEraser) {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({
    description: 'The record has been successfully deleted.',
  })
  @ApiBadRequestResponse({
    description: 'The uuid param has an invalid format',
  })
  @ApiNotFoundResponse({
    description: 'The record not exist',
  })
  public findById(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return this.restaurantEraser.soft(id);
  }
}
