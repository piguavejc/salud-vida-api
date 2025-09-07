import { Column, ColumnOptions } from 'typeorm'

export const UuidColumn = (options?: ColumnOptions): PropertyDecorator => {
  return (target, propertyKey) => {
    Column({ type: 'uuid', ...options })(target, propertyKey)
  }
}
