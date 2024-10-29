import { z } from 'zod';

import { statusSchema } from './vehicle-transaction.js';

export const vehicleTransactionCompletedSchema = z.object({
  transactionId: z.string(),
  newStatus: statusSchema,
  completedAt: z.coerce.date(),
});

export type VehicleTransactionCompleted = z.infer<typeof vehicleTransactionCompletedSchema>;
