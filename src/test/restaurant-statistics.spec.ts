import { Test } from '@nestjs/testing';
import { RestaurantFakeRepository } from './util/restaurant-fake.repository';
import { RestaurantStatistics } from '../main/services/restaurant-statistics';
import { RestaurantRepository } from '../main/repositories/restaurant.repository';
import { RestaurantEntity } from '../main/entities/restaurant.entity';
import { Summary } from '../main/models/summary';

describe('Restaurant - Statistics', () => {
  let restaurantStatistics: RestaurantStatistics;
  let restaurantRepository: RestaurantRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RestaurantStatistics,
        {
          provide: 'RestaurantRepository',
          useClass: RestaurantFakeRepository,
        },
      ],
    }).compile();

    restaurantStatistics = moduleRef.get(RestaurantStatistics);
    restaurantRepository = moduleRef.get('RestaurantRepository');
  });

  describe('happy path', () => {
    it('should calculate statistics if search have results', async () => {
      jest.spyOn(restaurantRepository, 'range').mockImplementation(() =>
        Promise.resolve([
          {
            ...new RestaurantEntity(),
            rating: 1,
          },
          {
            ...new RestaurantEntity(),
            rating: 3,
          },
        ]),
      );

      await expect(
        restaurantStatistics.calculate(19.4400570537131, -99.1270470974249, 70),
      ).resolves.toStrictEqual(new Summary(2, 2, 1));
    });

    it('should calculate statistics if search have not results', async () => {
      jest
        .spyOn(restaurantRepository, 'range')
        .mockImplementation(() => Promise.resolve([]));

      await expect(
        restaurantStatistics.calculate(19.4400570537131, -99.1270470974249, 70),
      ).resolves.toStrictEqual(new Summary(0, 0, 0));
    });
  });
});
