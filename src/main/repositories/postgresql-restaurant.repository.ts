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

  public async saveAll(restaurants: Restaurant[]): Promise<void> {
    const entities = restaurants.map((restaurant) =>
      RestaurantEntity.fromDto(restaurant),
    );
    await this.repository.save(entities);
  }

  public async findById(id: string): Promise<Restaurant | null> {
    const found = await this.repository.findOneBy({ id, deleted: false });
    return found ? found.toDto() : null;
  }

  public async findAll(): Promise<Restaurant[]> {
    const found = await this.repository.findBy({ deleted: false });
    return found.map((entity) => entity.toDto());
  }

  public async save(restaurant: Restaurant): Promise<void> {
    await this.repository.save(RestaurantEntity.fromDto(restaurant));
  }

  public async softDelete(id: string): Promise<void> {
    const found = await this.repository.findOneBy({ id });
    if (!found) {
      return;
    }
    found.deleted = true;
    await this.repository.save(found);
  }

  public async range(
    latitude: number,
    longitude: number,
    radius: number,
  ): Promise<Restaurant[]> {
    const origin = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
    const locations = await this.repository
      .createQueryBuilder('Restaurant')
      .where(
        'ST_DWithin(location, ST_SetSRID(ST_GeomFromGeoJSON(:origin), ST_SRID(location)) ,:range)',
      )
      .setParameters({
        origin: JSON.stringify(origin),
        range: radius,
      })
      .getMany();
    return locations;
  }
}
