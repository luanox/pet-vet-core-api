import { BaseEntity } from '../../../common/entities';
import { Column, Entity } from 'typeorm';

@Entity('enterprise')
export class Enterprise extends BaseEntity {
  @Column({ name: 'name', type: 'varchar', length: 50, nullable: false })
  public name: string;

  @Column({ name: 'city', type: 'varchar', nullable: true })
  public city: string;

  @Column({ name: 'is_sms', type: 'boolean', nullable: false, default: false })
  public isSms: boolean;

  @Column({
    name: 'is_email',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  public isEmail: boolean;

  @Column({ name: 'logo_url', type: 'varchar', nullable: true })
  public logoUrl: string;

  @Column({
    name: 'is_active',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  public isActive: boolean;
}
