export type Pagination = {
  /**
   * In which page must be returned.
   *
   * @type page | number
   */
  page?: number

  /**
   * Tell how many items per page needs to be returned.
   *
   * @type perPage | number
   */
  perPage?: number

  /**
   * Tell if the resources should bem ASCending or DESCending.
   *
   * @type order | string
   */
  order?: 'ASC' | 'DESC'

  /**
   * Which field the resources must be ordered.
   *
   * @type orderBy | string
   */
  orderBy?: string
}
