import 'dotenv/config';

import { z } from 'zod';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export const envSchema = z.object({
  NODE_ENV: z.nativeEnum(Environment).default(Environment.Development),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  SECRET_PHRASE: z.string(),
});

export type EnvVariables = z.infer<typeof envSchema>;

export const validateEnv = () => {
  const env = envSchema.parse(process.env);
  return env;
};
