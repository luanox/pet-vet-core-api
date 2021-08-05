import { createConnection } from 'typeorm';

import { DATABASE_CONNECTION } from '../common/constants';
import { Enterprise } from '../app/enterprise/entities/entrerprise.entity';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        name: 'postgres',
        host: process.env.POSTGRES_DATABASE_HOST,
        port: parseInt('5432'),
        username: process.env.POSTGRES_DATABASE_USER,
        password: process.env.POSTGRES_DATABASE_PASSWORD,
        database: process.env.POSTGRES_DATABASE_NAME,
        logging: 'all',
        logger: 'advanced-console',
        migrationsRun: true,
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        entities: [Enterprise],
        subscribers: [],
        synchronize: false,
      }),
  },
];
