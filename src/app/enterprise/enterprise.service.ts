import { Inject, Injectable } from '@nestjs/common';
import { ENTERPRISE_REPOSITORY } from '../../common/constants';
import { EnterpriseRepository } from './enterprise.repository';

@Injectable()
export class EnterpriseService {
  constructor(
    @Inject(ENTERPRISE_REPOSITORY)
    private readonly enterpriseRepository: EnterpriseRepository,
  ) {}
}
