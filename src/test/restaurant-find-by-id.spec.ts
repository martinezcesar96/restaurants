import { RestaurantRepository } from '../main/repositories/restaurant.repository';
import { Test } from '@nestjs/testing';
import { RestaurantFakeRepository } from './util/restaurant-fake.repository';
import { RestaurantFinder } from '../main/services/restaurant-finder';
import { Restaurant } from '../main/models/restaurant';
import { ResourceNotFoundException } from '../main/exceptions/resource-not-found.exception';

describe('Restaurant - Find By Id', () => {
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
    it('should found element if it exist', async () => {
      jest
        .spyOn(restaurantRepository, 'findById')
        .mockImplementation(() => Promise.resolve(new Restaurant()));

      await expect(
        restaurantFinder.findById('abc-def-fgh'),
      ).resolves.toBeInstanceOf(Restaurant);
    });
  });

  describe('Validations', () => {
    it('should throws an exception if it not exist', async () => {
      jest
        .spyOn(restaurantRepository, 'findById')
        .mockImplementation(() => Promise.resolve(null));

      await expect(restaurantFinder.findById('abc-def-fgh')).rejects.toThrow(
        ResourceNotFoundException,
      );
    });
  });
});
