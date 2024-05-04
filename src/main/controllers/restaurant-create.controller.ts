import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { Restaurant } from '../models/restaurant';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import { RestaurantCreator } from '../services/restaurant-creator';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantCreateController {
  constructor(private readonly restaurantCreator: RestaurantCreator) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiBadRequestResponse({
    description: 'The record has an invalid field',
  })
  @ApiUnprocessableEntityResponse({
    description: 'The record already exist',
  })
  public findById(@Body() restaurant: Restaurant): Promise<void> {
    return this.restaurantCreator.create(restaurant);
  }
}
