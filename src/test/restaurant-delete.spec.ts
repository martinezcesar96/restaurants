import { RestaurantRepository } from '../main/repositories/restaurant.repository';
import { Test } from '@nestjs/testing';
import { RestaurantFakeRepository } from './util/restaurant-fake.repository';
import { Restaurant } from '../main/models/restaurant';
import { ResourceNotFoundException } from '../main/exceptions/resource-not-found.exception';
import { RestaurantEraser } from '../main/services/restaurant-eraser';

describe('Restaurant - Delete', () => {
  let restaurantEraser: RestaurantEraser;
  let restaurantRepository: RestaurantRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RestaurantEraser,
        {
          provide: 'RestaurantRepository',
          useClass: RestaurantFakeRepository,
        },
      ],
    }).compile();

    restaurantEraser = moduleRef.get(RestaurantEraser);
    restaurantRepository = moduleRef.get('RestaurantRepository');
  });

  describe('happy path', () => {
    it('should delete element if it exist', async () => {
      jest
        .spyOn(restaurantRepository, 'findById')
        .mockImplementation(() => Promise.resolve(new Restaurant()));

      jest
        .spyOn(restaurantRepository, 'softDelete')
        .mockImplementation(() => Promise.resolve());

      await expect(
        restaurantEraser.soft('abc-def-ghi'),
      ).resolves.toBeUndefined();
    });
  });

  describe('Validations', () => {
    it('should throws a resource not found exception if it not exist', async () => {
      jest
        .spyOn(restaurantRepository, 'findById')
        .mockImplementation(() => Promise.resolve(null));

      await expect(restaurantEraser.soft('abc-def-ghi')).rejects.toThrow(
        ResourceNotFoundException,
      );
    });
  });
});
