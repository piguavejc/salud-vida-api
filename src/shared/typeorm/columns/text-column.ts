import { Column, ColumnOptions } from 'typeorm'

export const TextColumn = (options?: ColumnOptions): PropertyDecorator => {
  return (target, propertyKey) => {
    // If length is provided, use varchar instead of text
    if (options && options.length) {
      Column({ type: 'varchar', ...options })(target, propertyKey)
    } else {
      Column({ type: 'text', ...options })(target, propertyKey)
    }
  }
}
