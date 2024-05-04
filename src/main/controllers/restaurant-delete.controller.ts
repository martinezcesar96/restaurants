import {
  Controller,
  Delete,
  HttpCode,
  Param,
  UseFilters,
} from '@nestjs/common';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import { RestaurantEraser } from '../services/restaurant-eraser';

@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantDeleteController {
  constructor(private readonly restaurantEraser: RestaurantEraser) {}

  @Delete(':id')
  @HttpCode(204)
  public findById(@Param('id') id: string): Promise<void> {
    return this.restaurantEraser.soft(id);
  }
}
