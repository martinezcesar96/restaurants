import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from '../../../src/main/entities/restaurant.entity';
import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
} from '../env/environment';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: DB_PORT,
      username: DB_USER,
      password: DB_PASS,
      entities: [RestaurantEntity],
      database: DB_NAME,
      synchronize: true,
      logging: false,
    }),
  ],
})
export class DatabaseModule {}
