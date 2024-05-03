import { Restaurant } from '../../main/models/restaurant';
import { RestaurantRepository } from '../../main/repositories/restaurant.repository';

export class RestaurantFakeRepository implements RestaurantRepository {
  findById(id: string): Promise<Restaurant | null> {
    throw new Error('Method not implemented.');
  }
  create(restaurant: Restaurant): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
