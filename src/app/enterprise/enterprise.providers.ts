import { Connection } from 'typeorm';

import { EnterpriseRepository } from './enterprise.repository';

import {
  ENTERPRISE_REPOSITORY,
  DATABASE_CONNECTION,
} from '../../common/constants';

export const enterpriseProvider = [
  {
    provide: ENTERPRISE_REPOSITORY,
    useFactory: (connection: Connection) =>
      connection.getCustomRepository(EnterpriseRepository),
    inject: [DATABASE_CONNECTION],
  },
];
