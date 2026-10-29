import 'dotenv/config';
import { z } from 'zod';

const EnvSchema = z.object({
  PORT: z.coerce.number().default(3000),
});

export const config = EnvSchema.parse(process.env);
  