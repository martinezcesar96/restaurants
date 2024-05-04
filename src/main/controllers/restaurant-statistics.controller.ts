import { Controller, Get, Query, UseFilters } from '@nestjs/common';
import { CustomExceptionFilter } from '../exceptions/custom-exception.filter';
import { RestaurantStatistics } from '../services/restaurant-statistics';
import { Summary } from '../models/summary';
import { StatisticsQueryParams } from '../models/statistics-query-params';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
@UseFilters(CustomExceptionFilter)
export class RestaurantStatisticsController {
  constructor(private readonly restaurantStatistics: RestaurantStatistics) {}

  @Get('statistics')
  @ApiOkResponse({
    description: 'The record has been successfully retrieved',
    type: Summary,
  })
  @ApiBadRequestResponse({
    description: 'Some param has an invalid format',
  })
  public findById(@Query() query: StatisticsQueryParams): Promise<Summary> {
    return this.restaurantStatistics.calculate(
      query.latitude,
      query.longitude,
      query.radius,
    );
  }
}
