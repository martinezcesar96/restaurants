import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantCSVLoader {
  public load(csvText: string): Promise<void> {
    return Promise.resolve();
  }
}
