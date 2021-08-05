import { BaseEntity } from './base.entity'

class MyEntity extends BaseEntity {}

describe('BaseEntity', () => {
  let entity

  beforeEach(() => {
    entity = new MyEntity()
  })

  it('is defined', () => {
    expect(entity).toBeDefined()
  })

  describe('when params is available', () => {
    beforeEach(() => {
      entity.id = 'wie8-0oe8-plk2-iiw8'
      entity.name = 'Hotel Intercity - Porto Velho'
      entity.isActive = true
      entity.createdAt = new Date()
      entity.updatedAt = new Date()
    })

    it('id is defined', () => {
      expect(entity.id).toBeDefined()
    })

    it('createdAt is defined', () => {
      expect(entity.createdAt).toBeDefined()
    })

    it('updatedAt is defined', () => {
      expect(entity.updatedAt).toBeDefined()
    })

    it('isActive is defined', () => {
      expect(entity.isActive).toBeDefined()
    })

    it('deletedAt is optional', () => {
      expect(entity.deletedAt).toBeUndefined()
    })
  })

  describe('when params are not available', () => {
    const entity = new MyEntity()

    it('some params are undefined', () => {
      expect(entity.id).toBeUndefined()
    })
  })
})
