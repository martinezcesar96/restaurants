import { Restaurant } from '../models/restaurant';

export interface RestaurantRepository {
  findById(id: string): Promise<Restaurant | null>;
  create(restaurant: Restaurant): Promise<void>;
}
