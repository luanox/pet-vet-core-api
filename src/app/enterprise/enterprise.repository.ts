import { AbstractRepository, EntityRepository } from 'typeorm';
import { Enterprise } from './entities/entrerprise.entity';

@EntityRepository(Enterprise)
export class EnterpriseRepository extends AbstractRepository<Enterprise> {}
