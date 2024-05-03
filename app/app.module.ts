import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from '../src/main/entities/restaurant.entity';
import { RestaurantCSVLoader } from '../src/main/services/restaurant-csv-loader';
import { RestaurantPostgreSQLRepository } from '../src/main/repositories/postgresql-restaurant.repository';
import { UploadCSVDataController } from '../src/main/controllers/upload-csv-data.controller';

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
  controllers: [UploadCSVDataController],
  providers: [
    RestaurantCSVLoader,
    {
      provide: 'RestaurantRepository',
      useClass: RestaurantPostgreSQLRepository,
    },
  ],
})
export class AppModule {}
