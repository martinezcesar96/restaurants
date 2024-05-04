import { IsLatitude, IsLongitude, IsNumberString } from 'class-validator';

export class StatisticsQueryParams {
  @IsLatitude()
  public latitude!: number;

  @IsLongitude()
  public longitude!: number;

  @IsNumberString()
  public radius!: number;
}
