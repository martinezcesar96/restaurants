import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RestaurantCSVLoader } from '../services/restaurant-csv-loader';
import { ApiBody, ApiConsumes, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FileUpload } from '../models/file-upload';

@ApiTags('restaurants')
@Controller('restaurants')
export class LoadCSVDataController {
  constructor(private readonly restaurantCSVLoader: RestaurantCSVLoader) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'The record has been successfully retrieved',
    type: FileUpload,
  })
  @ApiOkResponse({
    description: 'The records have been successfully loaded',
  })
  @UseInterceptors(FileInterceptor('file'))
  public upload(@UploadedFile() file: Express.Multer.File): Promise<void> {
    const data = file.buffer.toString();

    return this.restaurantCSVLoader.load(data);
  }
}
