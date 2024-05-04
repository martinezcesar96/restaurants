import { Inject, Injectable } from '@nestjs/common';
import { parse } from 'papaparse';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { Restaurant } from '../models/restaurant';

@Injectable()
export class RestaurantCSVLoader {
  constructor(
    @Inject('RestaurantRepository')
    private readonly restaurantRepository: RestaurantRepository,
  ) {}

  public load(csvText: string): Promise<void> {
    const parsedCsv = parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase(),
      complete: (result) => result.data,
      dynamicTyping: true,
    });

    const restaurants = parsedCsv.data as Restaurant[];
    return this.restaurantRepository.saveAll(restaurants);
  }
}
