import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiTags } from '@nestjs/swagger';
import { EnterpriseService } from './enterprise.service';
import {CreateEnterpriseDto} from './dtos/create-enterprise.dto'

@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @ApiTags('Enterprise')
  @ApiBody({
    schema: {
      example: {

      }
    }
  })
  @Post()
  public async createOne(@Body() createEnterpriseDto: CreateEnterpriseDto): Promise<any> {
    return
  }
}
