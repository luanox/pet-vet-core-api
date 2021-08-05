import { table } from 'console'
import { SnakeNamingStrategy } from './snake-naming.strategy'

describe('SnakeNamingStrategy', () => {
  let snakeNamingStrategy

  beforeEach(() => {
    snakeNamingStrategy = new SnakeNamingStrategy()
  })

  describe('#tableName', () => {
    it('converts table name to snake case', () => {
      expect(snakeNamingStrategy.tableName('UsersGroups')).toEqual('users_groups')
    })

    describe('when pass the custom name', () => {
      it('the custom name takes precedence', () => {
        expect(snakeNamingStrategy.tableName('UsersGroups', 'UsersGroups')).toEqual('UsersGroups')
      })
    })
  })

  describe('#columnName', () => {
    const columnName = 'fullName'
    let customName = ''

    it('converts column name to snake case', () => {
      const columnName = 'fullName'
      const customName = ''

      expect(snakeNamingStrategy.columnName(columnName, customName, [''])).toEqual('full_name')
    })

    describe('when it has custom name', () => {
      beforeEach(() => (customName = 'myCustomName'))

      it('the custom name takes precedence', () => {
        expect(snakeNamingStrategy.columnName(columnName, customName, [''])).toEqual('myCustomName')
      })
    })
  })

  describe('#relationName', () => {
    it('converts relation name to snake case', () => {
      expect(snakeNamingStrategy.relationName('usersPermissions')).toEqual('users_permissions')
    })

    describe('if the name is already snake case', () => {
      it('does not convert it', () => {
        expect(snakeNamingStrategy.relationName('users_permissions')).toEqual('users_permissions')
      })
    })
  })

  describe('#joinTableColumnName', () => {
    const tableName = 'users'
    const propertyName = 'arrivedAt'
    const columnName = 'departuredAt'

    describe('when it has no column name', () => {
      it('converts the column name to snake case', () => {
        expect(snakeNamingStrategy.joinTableColumnName(tableName, propertyName)).toEqual(
          'users_arrived_at'
        )
      })
    })

    describe('when it has column name', () => {
      it('converts all to snake case', () => {
        const converted = snakeNamingStrategy.joinTableColumnName(
          tableName,
          propertyName,
          columnName
        )

        expect(converted).toEqual('users_departured_at')
      })
    })
  })
})
