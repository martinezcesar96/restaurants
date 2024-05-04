import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  UseFilters,
} from '@nestjs/common';
import { RestaurantFinder } from '../services/restaurant-finder';
import { Restaurant } from '../models/restaurant';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantFindByIdController {
  constructor(private readonly restaurantFinder: RestaurantFinder) {}

  @Get(':id')
  @ApiOkResponse({
    description: 'The record has been successfully retrieved',
    type: Restaurant,
  })
  @ApiBadRequestResponse({
    description: 'The uuid param has an invalid format',
  })
  @ApiNotFoundResponse({
    description: 'The record not exist',
  })
  public findById(@Param('id', ParseUUIDPipe) id: string): Promise<Restaurant> {
    return this.restaurantFinder.findById(id);
  }
}
