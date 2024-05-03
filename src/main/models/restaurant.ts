import {
  IsInt,
  IsLatitude,
  IsLongitude,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class Restaurant {
  @IsUUID()
  public id: string | null = null;

  @IsInt()
  @Max(4)
  @Min(0)
  public rating: number | null = null;

  @IsString()
  public name: string | null = null;

  @IsString()
  public site: string | null = null;

  @IsString()
  public email: string | null = null;

  @IsString()
  public phone: string | null = null;

  @IsString()
  public street: string | null = null;

  @IsString()
  public city: string | null = null;

  @IsString()
  public state: string | null = null;

  @IsLatitude()
  public lat: number | null = null;

  @IsLongitude()
  public lng: number | null = null;
}
