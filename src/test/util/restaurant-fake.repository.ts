import { Restaurant } from '../../main/models/restaurant';
import { RestaurantRepository } from '../../main/repositories/restaurant.repository';

export class RestaurantFakeRepository implements RestaurantRepository {
  findById(id: string): Promise<Restaurant | null> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<Restaurant[]> {
    throw new Error('Method not implemented.');
  }

  save(restaurant: Restaurant): Promise<void> {
    throw new Error('Method not implemented.');
  }

  saveAll(restaurants: Restaurant[]): Promise<void> {
    throw new Error('Method not implemented.');
  }

  softDelete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
