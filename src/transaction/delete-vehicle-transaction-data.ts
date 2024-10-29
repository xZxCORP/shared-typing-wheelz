import { z } from 'zod';

import { vinSchema } from './vin.js';

export const deleteVehicleTransactionDataSchema = z.object({
  vin: vinSchema,
});
export type DeleteVehicleTransactionData = z.infer<typeof deleteVehicleTransactionDataSchema>;
