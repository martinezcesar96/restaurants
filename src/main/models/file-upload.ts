import { ApiProperty } from '@nestjs/swagger';

export class FileUpload {
  @ApiProperty({ type: 'csv', format: 'binary' })
  public file!: Express.Multer.File;
}
