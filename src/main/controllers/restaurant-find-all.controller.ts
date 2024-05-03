import { Controller, Get } from '@nestjs/common';
import { RestaurantFinder } from '../services/restaurant-finder';
import { Restaurant } from '../models/restaurant';

@Controller('restaurants')
export class RestaurantFindAllController {
  constructor(private readonly restaurantFinder: RestaurantFinder) {}

  @Get()
  public findAll(): Promise<Restaurant[]> {
    return this.restaurantFinder.findAll();
  }
}
