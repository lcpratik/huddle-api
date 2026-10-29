import 'dotenv/config'
import { z } from 'zod';
import { process } from 'zod/v4/core';

const EnvSchema = z.object({
    PORT: z.coerce.number().default(3000),
});

export const config = EnvSchema.parse(process.env);

  