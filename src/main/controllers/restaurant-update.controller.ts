import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Put,
  UseFilters,
} from '@nestjs/common';
import { Restaurant } from '../models/restaurant';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import { RestaurantUpdater } from '../services/restaurant-updater';

@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantUpdateController {
  constructor(private readonly restaurantUpdater: RestaurantUpdater) {}

  @Put(':id')
  public findById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() restaurant: Restaurant,
  ): Promise<void> {
    restaurant.id = id;
    return this.restaurantUpdater.replace(restaurant);
  }
}
