import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
