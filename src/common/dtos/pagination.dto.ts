import { IsOptional, IsNumberString } from 'class-validator'

export class PaginationDto {
  @IsOptional()
  @IsNumberString()
  public page = '1'

  @IsOptional()
  @IsNumberString()
  public perPage = '25'

  @IsOptional()
  public searchTypeField: '' | 'name'

  @IsOptional()
  public searchTypeValue: string

  @IsOptional()
  public orderByField = ''

  @IsOptional()
  public orderByValue: 'ASC' | 'DESC' = 'DESC'
}
