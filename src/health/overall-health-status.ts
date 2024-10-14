import { z } from 'zod';

import { healthStatusSchema } from './health-status.js';
import { serviceHealthStatusSchema } from './service-health-status.js';

export const overallHealthStatusSchema = z.object({
  status: healthStatusSchema,
  services: z.array(serviceHealthStatusSchema),
});
export type OverallHealthStatus = z.infer<typeof overallHealthStatusSchema>;
