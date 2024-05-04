import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/db/database.module';
import { RestaurantModule } from './modules/restaurant.module';

@Module({
  imports: [DatabaseModule, RestaurantModule],
})
export class AppModule {}
