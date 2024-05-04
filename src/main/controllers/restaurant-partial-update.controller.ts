import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Patch,
  UseFilters,
} from '@nestjs/common';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import { RestaurantUpdater } from '../services/restaurant-updater';
import { PartialRestaurant } from '../models/partial-restaurant';

@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantPartialUpdateController {
  constructor(private readonly restaurantUpdater: RestaurantUpdater) {}

  @Patch(':id')
  public findById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() restaurant: PartialRestaurant,
  ): Promise<void> {
    restaurant.id = id;
    return this.restaurantUpdater.partial(restaurant);
  }
}
