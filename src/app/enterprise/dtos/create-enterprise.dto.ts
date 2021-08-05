import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateEnterpriseDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsBoolean()
  isSms: boolean;

  @ApiProperty()
  @IsBoolean()
  isEmail: boolean;

  @ApiProperty()
  @IsString()
  logoUrl: string;
}
