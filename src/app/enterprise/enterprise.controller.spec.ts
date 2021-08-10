import { Test, TestingModule } from '@nestjs/testing';
import { CreateEnterpriseDto } from './dtos/create-enterprise.dto';
import { EnterpriseController } from './enterprise.controller';
import { EnterpriseService } from './enterprise.service';
import { AppLogger } from '../../app.logger';
import { Enterprise } from './entities/entrerprise.entity';
import * as faker from 'faker';

describe('EnterpriseController', () => {
  let controller: EnterpriseController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnterpriseController],
      providers: [
        {
          provide: EnterpriseService,
          useValue: {
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<EnterpriseController>(EnterpriseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Created', async () => {
    it('create new enterprise', async () => {
      let enterprise = new Enterprise();

      enterprise.name = faker.name.findName();
      enterprise.city = faker.name.findName();
      enterprise.isSms = false;
      enterprise.isEmail = true;
      enterprise.logoUrl = '';
      enterprise.isActive = true;

      const newEnterprise = await controller.createOne(enterprise);

      // expect(spyService.getGpa).toHaveBeenCalled();
    });
  });
});
