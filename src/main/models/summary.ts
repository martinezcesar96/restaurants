import { ApiProperty } from '@nestjs/swagger';

export class Summary {
  @ApiProperty({ example: 2 })
  public readonly count: number;
  @ApiProperty({ example: 2 })
  public readonly avg: number;
  @ApiProperty({ example: 1 })
  public readonly std: number;

  constructor(count: number, avg: number, std: number) {
    this.count = count;
    this.avg = avg;
    this.std = std;
  }

  public static empty(): Summary {
    return new Summary(0, 0, 0);
  }
}
