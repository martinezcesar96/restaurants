import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: '851f799f-0852-439e-b9b2-df92c43e7672',
    nullable: true,
  })
  public id!: string;

  @IsInt()
  @Max(4)
  @Min(0)
  @IsOptional()
  @ApiProperty({ example: 1, nullable: true })
  public rating!: number;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Barajas, Bahena and Kano', nullable: true })
  public name!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'https://federico.com', nullable: true })
  public site!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Anita_Mata71@hotmail.com', nullable: true })
  public email!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '534 814 204', nullable: true })
  public phone!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '82247 Mariano Entrada', nullable: true })
  public street!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Mérida Alfredotown', nullable: true })
  public city!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'Durango', nullable: true })
  public state!: string;

  @IsLatitude()
  @IsOptional()
  @ApiProperty({ example: 19.4400570537131, nullable: true })
  public lat!: number;

  @IsLongitude()
  @IsOptional()
  @ApiProperty({ example: -99.1270470974249, nullable: true })
  public lng!: number;
}
