import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm'
import { snakeCase } from 'typeorm/util/StringUtils'

export class SnakeNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  public tableName(className: string, customName = ''): string {
    return customName ? customName : snakeCase(className)
  }

  /**
   * Converts column name to snake case.
   *
   * @param propertyName | string
   * @param customName | string
   * @param embeddedPrefixes | string
   */
  public columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    return (
      snakeCase(embeddedPrefixes.join('_')) + (customName ? customName : snakeCase(propertyName))
    )
  }

  /**
   * Converts then relation name to snake case
   *
   * @param propertyName | string
   *
   * @returns propertyName | string
   */
  public relationName(propertyName: string): string {
    return snakeCase(propertyName)
  }

  /**
   * Converts the join table name to snake case.
   *
   * @param tableName | name of the table
   * @param propertyName | name of the column on other table
   * @param columnName | the column name | optional
   */
  public joinTableColumnName(tableName: string, propertyName: string, columnName?: string): string {
    return snakeCase(tableName + '_' + (columnName ? columnName : propertyName))
  }

  /**
   * Converts table inheritance to snake case.
   *
   * @param parentTableName | the parent table name
   * @param parentTableIdPropertyName | the id property name on parent table
   */
  public classTableInheritanceParentColumnName(
    parentTableName: string,
    parentTableIdPropertyName: string
  ): string {
    return snakeCase(`${parentTableName}_${parentTableIdPropertyName}`)
  }
}
