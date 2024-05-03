/* eslint-disable @typescript-eslint/no-unsafe-call */
import { RestaurantRepository } from '../main/repositories/restaurant.repository';
import { RestaurantCSVLoader } from '../main/services/restaurant-csv-loader';

import { Test } from '@nestjs/testing';
import { RestaurantFakeRepository } from './util/restaurant-fake.repository';

describe('Load Data From CSV', () => {
  let restaurantCSVLoader: RestaurantCSVLoader;
  let restaurantRepository: RestaurantRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RestaurantCSVLoader,
        {
          provide: 'RestaurantRepository',
          useClass: RestaurantFakeRepository,
        },
      ],
    }).compile();

    restaurantCSVLoader = moduleRef.get(RestaurantCSVLoader);
    restaurantRepository = moduleRef.get('RestaurantRepository');
  });

  describe('happy path', () => {
    it('if csv is correct should insert all data in DB', async () => {
      jest
        .spyOn(restaurantRepository, 'findById')
        .mockImplementation(() => Promise.resolve(null));

      jest
        .spyOn(restaurantRepository, 'create')
        .mockImplementation(() => Promise.resolve());

      const csvText = `id,rating,name,site,email,phone,street,city,state,lat,lng
      851f799f-0852-439e-b9b2-df92c43e7672,1,"Barajas, Bahena and Kano",https://federico.com,Anita_Mata71@hotmail.com,534 814 204,82247 Mariano Entrada,Mérida Alfredotown,Durango,19.4400570537131,-99.1270470974249`;

      await expect(restaurantCSVLoader.load(csvText)).resolves.toBe(undefined);
    });
  });
});
