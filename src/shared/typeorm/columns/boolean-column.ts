import { Column, ColumnOptions } from 'typeorm'

export const BooleanColumn = (options?: ColumnOptions): PropertyDecorator => {
  return (target, propertyKey) => {
    Column({ type: 'boolean', ...options })(target, propertyKey)
  }
}
