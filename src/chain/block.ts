import { z } from 'zod';

import { vehicleTransactionSchema } from '../transaction/vehicle-transaction.js';

export const blockSchema = z.object({
  previousHash: z.string(),
  timestamp: z.date(),
  transactions: z.array(vehicleTransactionSchema),
  hash: z.string(),
});

export type Block = z.infer<typeof blockSchema>;
