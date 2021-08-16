import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ENTERPRISE_REPOSITORY } from '../../common/constants';
import { CreateEnterpriseDto } from './dtos/create-enterprise.dto';
import { EnterpriseRepository } from './enterprise.repository';
import { Enterprise } from './entities/entrerprise.entity';

@Injectable()
export class EnterpriseService {
  constructor(
    @Inject(ENTERPRISE_REPOSITORY)
    private readonly enterpriseRepository: EnterpriseRepository,
  ) {}

  /**
   * Creates a new enterprise by given DTO.
   *
   * @param createEnterpriseDto | DTO to create a new network | createEnterpriseDto
   *
   * @returns Promise<Enterprise>
   */
  public async createOne(
    createEnterpriseDto: CreateEnterpriseDto,
  ): Promise<Enterprise> {
    const enterprise = new Enterprise();

    enterprise.name = createEnterpriseDto.name;
    enterprise.city = createEnterpriseDto.city;
    enterprise.isSms = createEnterpriseDto.isSms;
    enterprise.isEmail = createEnterpriseDto.isEmail;
    enterprise.logoUrl = createEnterpriseDto.logoUrl;

    return await this.enterpriseRepository.createOne(enterprise);
  }

  public async findOne(enterpriseId): Promise<Enterprise> {
    return await this.enterpriseRepository.findOne(enterpriseId);
  }
}
