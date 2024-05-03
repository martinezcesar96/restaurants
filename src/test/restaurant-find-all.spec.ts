import { RestaurantRepository } from '../main/repositories/restaurant.repository';
import { Test } from '@nestjs/testing';
import { RestaurantFakeRepository } from './util/restaurant-fake.repository';
import { RestaurantFinder } from '../main/services/restaurant-finder';

describe('Restaurant - Find All', () => {
  let restaurantFinder: RestaurantFinder;
  let restaurantRepository: RestaurantRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RestaurantFinder,
        {
          provide: 'RestaurantRepository',
          useClass: RestaurantFakeRepository,
        },
      ],
    }).compile();

    restaurantFinder = moduleRef.get(RestaurantFinder);
    restaurantRepository = moduleRef.get('RestaurantRepository');
  });

  describe('happy path', () => {
    it('should found array data if all is ok', async () => {
      jest
        .spyOn(restaurantRepository, 'findAll')
        .mockImplementation(() => Promise.resolve([]));

      await expect(restaurantFinder.findAll()).resolves.toStrictEqual([]);
    });
  });
});
