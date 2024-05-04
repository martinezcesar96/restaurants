import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Put,
  UseFilters,
} from '@nestjs/common';
import { Restaurant } from '../models/restaurant';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import { RestaurantUpdater } from '../services/restaurant-updater';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantUpdateController {
  constructor(private readonly restaurantUpdater: RestaurantUpdater) {}

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record has an invalid field',
  })
  public findById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() restaurant: Restaurant,
  ): Promise<void> {
    restaurant.id = id;
    return this.restaurantUpdater.replace(restaurant);
  }
}
