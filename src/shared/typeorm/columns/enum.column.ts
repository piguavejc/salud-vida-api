import { Column, ColumnOptions } from 'typeorm'

export function EnumColumn<T extends object>(
  enumType: T,
  options?: ColumnOptions,
): PropertyDecorator {
  return (target: Record<string, unknown>, propertyKey: string | symbol) => {
    // Generar nombre seguro para el enum
    const entityName = (
      target.constructor as { name: string }
    ).name.toLowerCase()
    const enumName =
      options?.enumName ?? `enum_${entityName}_${String(propertyKey)}`

    Column({
      type: 'enum',
      enum: enumType,
      enumName,
      ...options,
    })(target, propertyKey)
  }
}
