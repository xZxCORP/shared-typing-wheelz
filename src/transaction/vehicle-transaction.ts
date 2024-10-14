import { z } from 'zod';

import { signatureSchema } from './signature.js';
import { vehicleTransactionDataSchema } from './vehicle-transaction-data.js';

export const vehicleTransactionSchema = z
  .object({
    timestamp: z.date(),
    dataSignature: signatureSchema,
  })
  .and(vehicleTransactionDataSchema);
export type VehicleTransaction = z.infer<typeof vehicleTransactionSchema>;
