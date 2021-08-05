import { Module } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';
import { EnterpriseController } from './enterprise.controller';
import { enterpriseProvider } from './enterprise.providers';
import { AppLogger } from '../../app.logger';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EnterpriseController],
  providers: [...enterpriseProvider, EnterpriseService, AppLogger],
  exports: [EnterpriseService],
})
export class EnterpriseModule {}
