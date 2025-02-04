import { z } from 'zod';

import { signatureSchema } from './signature.js';
import { vehicleTransactionDataSchema } from './vehicle-transaction-data.js';
export const statusSchema = z.enum(['pending', 'error', 'finished']);
export type Status = z.infer<typeof statusSchema>;
export const vehicleTransactionSchema = z
  .object({
    id: z.string(),
    timestamp: z.coerce.date(),
    dataSignature: signatureSchema,
    withAnomaly: z.boolean(),
    status: statusSchema,
    userId: z.string(),
  })
  .and(vehicleTransactionDataSchema);
export type VehicleTransaction = z.infer<typeof vehicleTransactionSchema>;
