import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateEnterpriseDto {
  @ApiProperty()
  public id: string

  @ApiProperty({name: 'name'})
  @IsString()
  name: string
}
