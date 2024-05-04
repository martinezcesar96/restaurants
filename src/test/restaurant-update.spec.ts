import { RestaurantRepository } from '../main/repositories/restaurant.repository';
import { Test } from '@nestjs/testing';
import { RestaurantFakeRepository } from './util/restaurant-fake.repository';
import { Restaurant } from '../main/models/restaurant';
import { RestaurantUpdater } from '../main/services/restaurant-updater';

describe('Restaurant - Update', () => {
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
    it('should update all element if id is valid', async () => {
      jest
        .spyOn(restaurantRepository, 'save')
        .mockImplementation(() => Promise.resolve());

      await expect(
        restaurantUpdater.replace(new Restaurant()),
      ).resolves.toBeUndefined();
    });
  });
});
