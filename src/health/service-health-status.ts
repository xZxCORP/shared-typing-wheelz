import { z } from 'zod';

import { healthStatusSchema } from './health-status.js';

export const serviceHealthStatusSchema = z.object({
  name: z.string(),
  status: healthStatusSchema,
  message: z.string().optional(),
});
export type ServiceHealthStatus = z.infer<typeof serviceHealthStatusSchema>;
