import { Module } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseController } from './enterprise.controller';
import { enterpriseProvider } from './enterprise.providers';
import { ApplicationLogger } from '../../app.logger';

@Module({
  imports: [],
  controllers: [EnterpriseController],
  providers: [...enterpriseProvider,EnterpriseService]
})
export class EnterpriseModule {}
