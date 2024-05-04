import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { Restaurant } from '../models/restaurant';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import { RestaurantCreator } from '../services/restaurant-creator';

@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantCreateController {
  constructor(private readonly restaurantCreator: RestaurantCreator) {}

  @Post()
  public findById(@Body() restaurant: Restaurant): Promise<void> {
    return this.restaurantCreator.create(restaurant);
  }
}
