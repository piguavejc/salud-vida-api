import { Column, ColumnOptions } from 'typeorm'

export const DateColumn = (options?: ColumnOptions): PropertyDecorator => {
  return (target, propertyKey) => {
    Column({ type: 'timestamp', ...options })(target, propertyKey)
  }
}
