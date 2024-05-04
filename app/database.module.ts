import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEntity } from '../src/main/entities/restaurant.entity';

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
      logging: false,
    }),
  ],
})
export class DatabaseModule {}
