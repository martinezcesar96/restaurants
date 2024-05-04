import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from '../../src/main/entities/restaurant.entity';
import { RestaurantCSVLoader } from '../../src/main/services/restaurant-csv-loader';
import { RestaurantPostgreSQLRepository } from '../../src/main/repositories/postgresql-restaurant.repository';
import { LoadCSVDataController } from '../../src/main/controllers/load-csv-data.controller';
import { RestaurantFindAllController } from '../../src/main/controllers/restaurant-find-all.controller';
import { RestaurantFinder } from '../../src/main/services/restaurant-finder';
import { RestaurantFindByIdController } from '../../src/main/controllers/restaurant-find-by-id.controller';
import { RestaurantCreateController } from '../../src/main/controllers/restaurant-create.controller';
import { RestaurantCreator } from '../../src/main/services/restaurant-creator';
import { RestaurantUpdateController } from '../../src/main/controllers/restaurant-update.controller';
import { RestaurantPartialUpdateController } from '../../src/main/controllers/restaurant-partial-update.controller';
import { RestaurantUpdater } from '../../src/main/services/restaurant-updater';
import { RestaurantDeleteController } from '../../src/main/controllers/restaurant-delete.controller';
import { RestaurantEraser } from '../../src/main/services/restaurant-eraser';
import { RestaurantStatisticsController } from '../../src/main/controllers/restaurant-statistics.controller';
import { RestaurantStatistics } from '../../src/main/services/restaurant-statistics';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantEntity])],
  controllers: [
    RestaurantStatisticsController,
    LoadCSVDataController,
    RestaurantFindAllController,
    RestaurantFindByIdController,
    RestaurantCreateController,
    RestaurantUpdateController,
    RestaurantPartialUpdateController,
    RestaurantDeleteController,
  ],
  providers: [
    RestaurantCSVLoader,
    RestaurantFinder,
    RestaurantCreator,
    RestaurantUpdater,
    RestaurantEraser,
    RestaurantStatistics,
    {
      provide: 'RestaurantRepository',
      useClass: RestaurantPostgreSQLRepository,
    },
  ],
})
export class RestaurantModule {}
