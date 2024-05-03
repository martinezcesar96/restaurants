import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RestaurantCSVLoader } from '../services/restaurant-csv-loader';

@Controller('restaurants')
export class LoadCSVDataController {
  constructor(private readonly restaurantCSVLoader: RestaurantCSVLoader) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('load'))
  public upload(@UploadedFile() file: Express.Multer.File): Promise<void> {
    const data = file.buffer.toString();

    return this.restaurantCSVLoader.load(data);
  }
}
