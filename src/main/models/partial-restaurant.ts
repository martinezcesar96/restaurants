import {
  IsInt,
  IsLatitude,
  IsLongitude,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class PartialRestaurant {
  @IsUUID()
  @IsOptional()
  public id: string | null = null;

  @IsInt()
  @Max(4)
  @Min(0)
  @IsOptional()
  public rating: number | null = null;

  @IsString()
  @IsOptional()
  public name: string | null = null;

  @IsString()
  @IsOptional()
  public site: string | null = null;

  @IsString()
  @IsOptional()
  public email: string | null = null;

  @IsString()
  @IsOptional()
  public phone: string | null = null;

  @IsString()
  @IsOptional()
  public street: string | null = null;

  @IsString()
  @IsOptional()
  public city: string | null = null;

  @IsString()
  @IsOptional()
  public state: string | null = null;

  @IsLatitude()
  @IsOptional()
  public lat: number | null = null;

  @IsLongitude()
  @IsOptional()
  public lng: number | null = null;
}
