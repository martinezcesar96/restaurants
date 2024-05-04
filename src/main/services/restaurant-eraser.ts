import { Inject, Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { ResourceNotFoundException } from '../exceptions/resource-not-found.exception';

@Injectable()
export class RestaurantEraser {
  constructor(
    @Inject('RestaurantRepository')
    private readonly restaurantRepository: RestaurantRepository,
  ) {}

  public async soft(id: string): Promise<void> {
    const found = await this.restaurantRepository.findById(id);

    if (!found) {
      throw new ResourceNotFoundException();
    }

    return this.restaurantRepository.softDelete(id);
  }
}
