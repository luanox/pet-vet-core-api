import { Module } from '@nestjs/common';
import { EnterpriseModule } from './app/enterprise/enterprise.module';

@Module({
  imports: [EnterpriseModule]
})
export class AppModule {}
