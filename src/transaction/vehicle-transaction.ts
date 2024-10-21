import { z } from 'zod';

import { signatureSchema } from './signature.js';
import { vehicleTransactionDataSchema } from './vehicle-transaction-data.js';

export const vehicleTransactionSchema = z
  .object({
    id: z.string(),
    timestamp: z.coerce.date(),
    dataSignature: signatureSchema,
    status: z.enum(['pending', 'finished']),
  })
  .and(vehicleTransactionDataSchema);
export type VehicleTransaction = z.infer<typeof vehicleTransactionSchema>;
