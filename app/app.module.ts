import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from '../src/main/entities/restaurant.entity';
import { RestaurantCSVLoader } from '../src/main/services/restaurant-csv-loader';
import { RestaurantPostgreSQLRepository } from '../src/main/repositories/postgresql-restaurant.repository';
import { LoadCSVDataController } from '../src/main/controllers/load-csv-data.controller';
import { RestaurantFindAllController } from '../src/main/controllers/restaurant-find-all.controller';
import { RestaurantFinder } from '../src/main/services/restaurant-finder';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      entities: [RestaurantEntity],
      database: 'restaurants',
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([RestaurantEntity]),
  ],
  controllers: [LoadCSVDataController, RestaurantFindAllController],
  providers: [
    RestaurantCSVLoader,
    RestaurantFinder,
    {
      provide: 'RestaurantRepository',
      useClass: RestaurantPostgreSQLRepository,
    },
  ],
})
export class AppModule {}
