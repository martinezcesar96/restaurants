import { Inject, Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { Summary } from '../models/summary';

@Injectable()
export class RestaurantStatistics {
  constructor(
    @Inject('RestaurantRepository')
    private readonly restaurantRepository: RestaurantRepository,
  ) {}

  public async calculate(
    latitude: number,
    longitude: number,
    radius: number,
  ): Promise<Summary> {
    const range = await this.restaurantRepository.range(
      latitude,
      longitude,
      radius,
    );

    const rating = range.map((item) => <number>item.rating);
    const count = rating.length;

    if (count === 0) {
      return Summary.empty();
    }

    const average = rating.reduce((a, b) => a + b) / count;
    const deviation = rating.map((rate) => Math.pow(rate - average, 2));
    const variance = deviation.reduce((a, b) => a + b) / count;
    const std = Math.sqrt(variance);

    return new Summary(count, average, std);
  }
}
