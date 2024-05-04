import { IsLatitude, IsLongitude, IsNumberString } from 'class-validator';

export class StatisticsRequest {
  @IsLatitude()
  public latitude!: number;

  @IsLongitude()
  public longitude!: number;

  @IsNumberString()
  public radius!: number;
}
