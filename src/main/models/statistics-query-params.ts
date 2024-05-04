import { ApiProperty } from '@nestjs/swagger';
import { IsLatitude, IsLongitude, IsNumberString } from 'class-validator';

export class StatisticsQueryParams {
  @IsLatitude()
  @ApiProperty({ example: 19.4400570537131 })
  public latitude!: number;

  @IsLongitude()
  @ApiProperty({ example: -99.1270470974249 })
  public longitude!: number;

  @IsNumberString()
  @ApiProperty({ example: 70 })
  public radius!: number;
}
