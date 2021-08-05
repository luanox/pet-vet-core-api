import { PaginationDto } from './pagination.dto'

describe('PaginationDto', () => {
  let dto: PaginationDto
  const columns = [
    'page',
    'perPage',
    'orderByField',
    'orderByValue',
    'searchTypeField',
    'searchTypeValue'
  ]

  beforeEach(() => {
    dto = new PaginationDto()

    dto.page = '2'
    dto.perPage = '10'
    dto.searchTypeField = 'name'
    dto.searchTypeValue = 'Rondonia'
    dto.orderByField = 'name'
    dto.searchTypeValue = 'ASC'
  })

  it('is defined', () => {
    expect(dto).toBeDefined()
  })

  it('the columns of dto is be valid', () => {
    const dtoColumns = Object.keys(dto)

    expect(dtoColumns).toEqual(columns)
  })

  columns.map((column) => {
    it(`the ${column} is included`, () => {
      expect(dto[column]).toBeDefined()
    })
  })
})
