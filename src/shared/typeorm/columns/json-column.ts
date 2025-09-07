import { Column, ColumnOptions } from 'typeorm'

export const JsonColumn = (options?: ColumnOptions): PropertyDecorator => {
  return (target, propertyKey) => {
    Column({ type: 'jsonb', ...options })(target, propertyKey)
  }
}

// export const SimpleJsonColumn = (
//   options?: ColumnOptions,
// ): PropertyDecorator => {
//   return (target, propertyKey) => {
//     Column({ type: 'json', ...options })(target, propertyKey)
//   }
// }
