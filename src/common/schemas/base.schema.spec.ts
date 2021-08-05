import { idBaseColumnSchemaPart, timestampBaseColumnsSchemaPart } from './base.schema'

describe('idBaseColumnSchemaPart', () => {
  const fields: string[] = ['id']

  fields.map((key) => {
    it(`${key} is defined`, () => {
      expect(idBaseColumnSchemaPart[key]).toBeDefined()
    })
  })
})

describe('timestampBaseColumnsSchemaPart', () => {
  const fields: string[] = ['createdAt', 'updatedAt', 'deletedAt']

  fields.map((key) => {
    it(`${key} is defined`, () => {
      expect(timestampBaseColumnsSchemaPart[key]).toBeDefined()
    })
  })
})
