export class RestaurantNotFoundException extends Error {
  constructor() {
    super('Restaurant Not Found');
  }
}
