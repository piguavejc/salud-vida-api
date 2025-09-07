import { Column, ColumnOptions } from 'typeorm'

export const IntColumn = (options?: ColumnOptions): PropertyDecorator => {
  return (target, propertyKey) => {
    Column({ type: 'int4', ...options })(target, propertyKey)
  }
}
