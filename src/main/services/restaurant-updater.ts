import { Inject, Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { Restaurant } from '../models/restaurant';
import { ResourceNotFoundException } from '../exceptions/resource-not-found.exception';

@Injectable()
export class RestaurantUpdater {
  constructor(
    @Inject('RestaurantRepository')
    private readonly restaurantRepository: RestaurantRepository,
  ) {}

  public async replace(restaurant: Restaurant): Promise<void> {
    return this.restaurantRepository.save(restaurant);
  }

  public async partial(restaurant: Restaurant): Promise<void> {
    const found = await this.restaurantRepository.findById(restaurant.id);

    if (!found) {
      throw new ResourceNotFoundException();
    }

    Object.assign(found, restaurant);

    return this.restaurantRepository.save(restaurant);
  }
}
