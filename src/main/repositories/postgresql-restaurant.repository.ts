import { Restaurant } from '../models/restaurant';
import { RestaurantRepository } from './restaurant.repository';

export class RestaurantPostgreSQLRepository implements RestaurantRepository {
  findById(id: string): Promise<Restaurant | null> {
    throw new Error('Method not implemented.');
  }
  create(restaurant: Restaurant): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
