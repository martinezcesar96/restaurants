import { Restaurant } from '../models/restaurant';

export interface RestaurantRepository {
  findById(id: string): Promise<Restaurant | null>;
  save(restaurant: Restaurant): Promise<void>;
  saveAll(restaurant: Restaurant[]): Promise<void>;
}
