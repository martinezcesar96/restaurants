import { Inject, Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { Restaurant } from '../models/restaurant';
import { ResourceNotFoundException } from '../exceptions/resource-not-found.exception';

@Injectable()
export class RestaurantFinder {
  constructor(
    @Inject('RestaurantRepository')
    private readonly restaurantRepository: RestaurantRepository,
  ) {}

  public async findById(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.findById(id);
    if (!restaurant) {
      throw new ResourceNotFoundException();
    }
    return restaurant;
  }

  public findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.findAll();
  }
}
