import { z } from 'zod';

export const healthStatusSchema = z.enum(['healthy', 'unhealthy']);
export type HealthStatus = z.infer<typeof healthStatusSchema>;
