import { RestaurantRepository } from '../main/repositories/restaurant.repository';
import { Test } from '@nestjs/testing';
import { RestaurantFakeRepository } from './util/restaurant-fake.repository';
import { Restaurant } from '../main/models/restaurant';
import { RestaurantUpdater } from '../main/services/restaurant-updater';
import { ResourceNotFoundException } from '../main/exceptions/resource-not-found.exception';
import { PartialRestaurant } from '../main/models/partial-restaurant';

describe('Restaurant - Partial Update', () => {
  let restaurantUpdater: RestaurantUpdater;
  let restaurantRepository: RestaurantRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RestaurantUpdater,
        {
          provide: 'RestaurantRepository',
          useClass: RestaurantFakeRepository,
        },
      ],
    }).compile();

    restaurantUpdater = moduleRef.get(RestaurantUpdater);
    restaurantRepository = moduleRef.get('RestaurantRepository');
  });

  describe('happy path', () => {
    it('should update partial element if id is valid and it exist', async () => {
      jest
        .spyOn(restaurantRepository, 'findById')
        .mockImplementation(() => Promise.resolve(new Restaurant()));

      jest
        .spyOn(restaurantRepository, 'save')
        .mockImplementation(() => Promise.resolve());

      const partialRestaurant = {
        email: 'changed@example.com',
        name: 'example updated',
      };

      await expect(
        restaurantUpdater.partial(<PartialRestaurant>partialRestaurant),
      ).resolves.toBeUndefined();
    });
  });

  describe('Validations', () => {
    it('should throws a resource not found exception if it not exist', async () => {
      jest
        .spyOn(restaurantRepository, 'findById')
        .mockImplementation(() => Promise.resolve(null));

      await expect(restaurantUpdater.partial(new Restaurant())).rejects.toThrow(
        ResourceNotFoundException,
      );
    });
  });
});
