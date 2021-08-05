import { AbstractRepository, EntityRepository } from 'typeorm';
import { Enterprise } from './entities/entrerprise.entity';

@EntityRepository(Enterprise)
export class EnterpriseRepository extends AbstractRepository<Enterprise> {
  public async findOne(id: string): Promise<any> {
    return await this.repository
      .createQueryBuilder('enterprise')
      .where('enterprise.id = :id', { id })
      .getOne();
  }

  public async createOne(network: Enterprise): Promise<Enterprise> {
    return await this.repository.save(network);
  }

  public async updateOne(network): Promise<Enterprise> {
    return await this.repository.save(network);
  }

  public async deleteOne(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }
}
