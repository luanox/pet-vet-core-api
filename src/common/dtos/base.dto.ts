import { IsOptional, IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';

export class BaseDto {
  @Expose()
  @IsUUID()
  @IsOptional()
  public id: string;

  constructor(params = {}) {
    Object.keys(params)
      .filter((key) => key in this)
      .map((key) => (this[key] = params[key]));
  }

  @Expose()
  public createdAt: Date;

  @Expose()
  public updatedAt: Date;

  @Expose()
  public deletedAt?: Date;
}
