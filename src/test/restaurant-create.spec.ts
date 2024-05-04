import { RestaurantRepository } from '../main/repositories/restaurant.repository';
import { Test } from '@nestjs/testing';
import { RestaurantFakeRepository } from './util/restaurant-fake.repository';
import { Restaurant } from '../main/models/restaurant';
import { RestaurantCreator } from '../main/services/restaurant-creator';
import { DuplicatedResourceException } from '../main/exceptions/duplicated-resource.exception';

describe('Restaurant - Create', () => {
  let restaurantCreator: RestaurantCreator;
  let restaurantRepository: RestaurantRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RestaurantCreator,
        {
          provide: 'RestaurantRepository',
          useClass: RestaurantFakeRepository,
        },
      ],
    }).compile();

    restaurantCreator = moduleRef.get(RestaurantCreator);
    restaurantRepository = moduleRef.get('RestaurantRepository');
  });

  describe('happy path', () => {
    it('should create an element if it not exist', async () => {
      jest
        .spyOn(restaurantRepository, 'findById')
        .mockImplementation(() => Promise.resolve(null));

      jest
        .spyOn(restaurantRepository, 'save')
        .mockImplementation(() => Promise.resolve());

      await expect(
        restaurantCreator.create(new Restaurant()),
      ).resolves.toBeUndefined();
    });
  });

  describe('Validations', () => {
    it('should throws an duplicated resource exception if it exist', async () => {
      jest
        .spyOn(restaurantRepository, 'findById')
        .mockImplementation(() => Promise.resolve(new Restaurant()));

      jest
        .spyOn(restaurantRepository, 'save')
        .mockImplementation(() => Promise.resolve());

      await expect(restaurantCreator.create(new Restaurant())).rejects.toThrow(
        DuplicatedResourceException,
      );
    });
  });
});
