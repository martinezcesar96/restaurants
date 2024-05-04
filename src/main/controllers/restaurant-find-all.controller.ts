import { Controller, Get } from '@nestjs/common';
import { RestaurantFinder } from '../services/restaurant-finder';
import { Restaurant } from '../models/restaurant';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
export class RestaurantFindAllController {
  constructor(private readonly restaurantFinder: RestaurantFinder) {}

  @Get()
  @ApiOkResponse({
    description: 'The records have been successfully retrieved',
    type: Restaurant,
    isArray: true,
  })
  public findAll(): Promise<Restaurant[]> {
    return this.restaurantFinder.findAll();
  }
}
