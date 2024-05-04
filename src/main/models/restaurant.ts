import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: '851f799f-0852-439e-b9b2-df92c43e7672' })
  public id!: string;

  @IsInt()
  @Max(4)
  @Min(0)
  @ApiProperty({ example: 1 })
  public rating!: number;

  @IsString()
  @ApiProperty({ example: 'Barajas, Bahena and Kano' })
  public name!: string;

  @IsString()
  @ApiProperty({ example: 'https://federico.com' })
  public site!: string;

  @IsString()
  @ApiProperty({ example: 'Anita_Mata71@hotmail.com' })
  public email!: string;

  @IsString()
  @ApiProperty({ example: '534 814 204' })
  public phone!: string;

  @IsString()
  @ApiProperty({ example: '82247 Mariano Entrada' })
  public street!: string;

  @IsString()
  @ApiProperty({ example: 'Mérida Alfredotown' })
  public city!: string;

  @IsString()
  @ApiProperty({ example: 'Durango' })
  public state!: string;

  @IsLatitude()
  @ApiProperty({ example: 19.4400570537131 })
  public lat!: number;

  @IsLongitude()
  @ApiProperty({ example: -99.1270470974249 })
  public lng!: number;
}
