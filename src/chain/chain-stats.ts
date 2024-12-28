import { z } from 'zod';

import { dateValueSchema } from '../utils/index.js';

export const chainStatsSchema = z.object({
  lastExecution: z
    .object({
      date: z.string(),
      newTransactions: z.number(),
    })
    .nullable(),
  evolutionOfTransactions: z.array(dateValueSchema),
  evolutionOfVehicles: z.array(dateValueSchema),
});
export type ChainStats = z.infer<typeof chainStatsSchema>;
