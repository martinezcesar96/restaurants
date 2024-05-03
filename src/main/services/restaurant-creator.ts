import { Inject, Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { Restaurant } from '../models/restaurant';
import { DuplicatedResourceException } from '../exceptions/duplicated-resource.exception';

@Injectable()
export class RestaurantCreator {
  constructor(
    @Inject('RestaurantRepository')
    private readonly restaurantRepository: RestaurantRepository,
  ) {}

  public async create(restaurant: Restaurant): Promise<void> {
    const found = await this.restaurantRepository.findById(
      restaurant.id as string,
    );

    if (found) {
      throw new DuplicatedResourceException();
    }

    return this.restaurantRepository.save(restaurant);
  }
}
