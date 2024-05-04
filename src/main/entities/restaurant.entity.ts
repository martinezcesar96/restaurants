import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Restaurant } from '../models/restaurant';

@Entity('Restaurant')
export class RestaurantEntity {
  @PrimaryColumn({ type: 'uuid' })
  public id: string | null = null;

  @Column({ type: 'int', enum: [0, 1, 2, 3, 4] })
  public rating: number | null = null;

  @Column({ type: 'text' })
  public name: string | null = null;

  @Column({ type: 'text' })
  public site: string | null = null;

  @Column({ type: 'text' })
  public email: string | null = null;

  @Column({ type: 'text' })
  public phone: string | null = null;

  @Column({ type: 'text' })
  public street: string | null = null;

  @Column({ type: 'text' })
  public city: string | null = null;

  @Column({ type: 'text' })
  public state: string | null = null;

  @Column({ type: 'float' })
  public lat: number | null = null;

  @Column({ type: 'float' })
  public lng: number | null = null;

  @Column({ type: 'boolean' })
  public deleted: boolean = false;

  public static fromDto(dto: Restaurant): RestaurantEntity {
    const entity = new RestaurantEntity();
    entity.id = dto.id;
    entity.rating = dto.rating;
    entity.name = dto.name;
    entity.site = dto.site;
    entity.email = dto.email;
    entity.phone = dto.phone;
    entity.street = dto.street;
    entity.city = dto.city;
    entity.state = dto.state;
    entity.lat = dto.lat;
    entity.lng = dto.lng;
    entity.deleted = false;
    return entity;
  }

  public toDto(): Restaurant {
    const dto = new Restaurant();
    dto.id = this.id;
    dto.rating = this.rating;
    dto.name = this.name;
    dto.site = this.site;
    dto.email = this.email;
    dto.phone = this.phone;
    dto.street = this.street;
    dto.city = this.city;
    dto.state = this.state;
    dto.lat = this.lat;
    dto.lng = this.lng;
    return dto;
  }
}
