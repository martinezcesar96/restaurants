import { Restaurant } from '../../main/models/restaurant';
import { RestaurantRepository } from '../../main/repositories/restaurant.repository';

export class RestaurantFakeRepository implements RestaurantRepository {
  saveAll(restaurant: Restaurant[]): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Restaurant | null> {
    throw new Error('Method not implemented.');
  }
  save(restaurant: Restaurant): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
