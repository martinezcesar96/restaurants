import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from '../models/restaurant';
import { RestaurantRepository } from './restaurant.repository';
import { RestaurantEntity } from '../entities/restaurant.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantPostgreSQLRepository implements RestaurantRepository {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly repository: Repository<RestaurantEntity>,
  ) {}

  public async saveAll(restaurant: Restaurant[]): Promise<void> {
    const entities = restaurant.map((restaurant) => {
      const entity = new RestaurantEntity();
      entity.id = restaurant.id;
      entity.rating = restaurant.rating;
      entity.name = restaurant.name;
      entity.site = restaurant.site;
      entity.email = restaurant.email;
      entity.phone = restaurant.phone;
      entity.street = restaurant.street;
      entity.city = restaurant.city;
      entity.state = restaurant.state;
      entity.lat = restaurant.lat;
      entity.lng = restaurant.lng;
      return entity;
    });
    await this.repository.save(entities);
  }

  public findById(id: string): Promise<Restaurant | null> {
    throw new Error('Method not implemented.');
  }

  public save(restaurant: Restaurant): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
