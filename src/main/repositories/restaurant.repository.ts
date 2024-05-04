import { Restaurant } from '../models/restaurant';

export interface RestaurantRepository {
  findById(id: string): Promise<Restaurant | null>;
  findAll(): Promise<Restaurant[]>;
  save(restaurant: Restaurant): Promise<void>;
  saveAll(restaurants: Restaurant[]): Promise<void>;
  softDelete(id: string): Promise<void>;
}
