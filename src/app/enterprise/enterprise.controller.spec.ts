import { Test, TestingModule } from '@nestjs/testing';
import { CreateEnterpriseDto } from './dtos/create-enterprise.dto';
import { EnterpriseController } from './enterprise.controller';
import { EnterpriseService } from './enterprise.service';
import { AppLogger } from '../../app.logger';

describe('EnterpriseController', () => {
  let controller: EnterpriseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnterpriseController],
      providers: [
        EnterpriseService,
        AppLogger,
        {
          provide: EnterpriseService,
          useValue: {
            findAll: jest.fn(),
            createOne: jest
              .fn()
              .mockImplementation((createEnterprise: CreateEnterpriseDto) => {
                Promise.resolve({});
              }),
          },
        },
      ],
    }).compile();

    controller = module.get<EnterpriseController>(EnterpriseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
