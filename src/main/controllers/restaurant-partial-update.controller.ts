import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  UseFilters,
} from '@nestjs/common';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import { RestaurantUpdater } from '../services/restaurant-updater';
import { PartialRestaurant } from '../models/partial-restaurant';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantPartialUpdateController {
  constructor(private readonly restaurantUpdater: RestaurantUpdater) {}

  @Patch(':id')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record has an invalid field',
  })
  @ApiNotFoundResponse({
    description: 'The record not exist',
  })
  public findById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() restaurant: PartialRestaurant,
  ): Promise<void> {
    restaurant.id = id;
    return this.restaurantUpdater.partial(restaurant);
  }
}
