import { EntitySchemaColumnOptions } from 'typeorm'

import { SnakeNamingStrategy } from '../strategies/snake-naming.strategy'

const snakeNamingStrategy = new SnakeNamingStrategy()

export const idBaseColumnSchemaPart = {
  id: {
    name: 'id',
    type: 'uuid',
    primary: true,
    generated: 'uuid',
    unique: true
  } as EntitySchemaColumnOptions
}

export const timestampBaseColumnsSchemaPart = {
  createdAt: {
    name: snakeNamingStrategy.tableName('createdAt', ''),
    type: 'timestamp',
    createDate: true
  } as EntitySchemaColumnOptions,

  updatedAt: {
    name: snakeNamingStrategy.tableName('updatedAt', ''),
    type: 'timestamp',
    updateDate: true
  } as EntitySchemaColumnOptions,

  deletedAt: {
    name: snakeNamingStrategy.tableName('deletedAt', ''),
    type: 'timestamp',
    nullable: true,
    deleteDate: true
  } as EntitySchemaColumnOptions
}
