import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnterpriseModule } from './app/enterprise/enterprise.module';

@Module({
  imports: [EnterpriseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
