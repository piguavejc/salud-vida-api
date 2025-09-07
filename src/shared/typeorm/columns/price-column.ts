import { Column, ColumnOptions } from 'typeorm'

export const PriceColumn = (options?: ColumnOptions): PropertyDecorator => {
  return (target, propertyKey) => {
    Column({ type: 'decimal', precision: 14, scale: 4, ...options })(
      target,
      propertyKey,
    )
  }
}
