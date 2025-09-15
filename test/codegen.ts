import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:3000/graphql', // El esquema debe estar disponible
  documents: [
    'test/modules/**/*.ts', // Archivos .graphql
    'test/modules/**/*.ts', // Archivos .ts
  ],
  generates: {
    'test/graphql/schema.types.ts': {
      plugins: ['typescript'],
      config: {
        skipTypename: true,
        enumsAsTypes: true,
      },
    },
    'test/graphql/types.ts': {
      preset: 'import-types-preset', // Usa el preset correcto
      plugins: ['typescript-operations'],
      presetConfig: {
        typesPath: './schema.types',
      },
    },
  },
};
export default config;
