import { BaseDto } from './base.dto'

describe('BaseDto', () => {
  let dto: BaseDto
  const columns = ['id', 'createdAt', 'updatedAt', 'deletedAt']

  beforeEach(() => {
    dto = new BaseDto()
  })

  it('is defined', () => {
    expect(dto).toBeDefined()
  })

  it('the properties of dto is listed', () => {
    expect(Object.keys(dto)).toEqual(columns)
  })

  columns.map((column) => {
    it(`the ${column} column is included`, () => {
      expect(dto.createdAt).toBeDefined()
    })
  })
})
