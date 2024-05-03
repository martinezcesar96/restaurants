import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { RestaurantFinder } from '../services/restaurant-finder';
import { Restaurant } from '../models/restaurant';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';

@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantFindByIdController {
  constructor(private readonly restaurantFinder: RestaurantFinder) {}

  @Get(':id')
  public findById(@Param('id') id: string): Promise<Restaurant> {
    return this.restaurantFinder.findById(id);
  }
}
