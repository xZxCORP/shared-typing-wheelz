import { z } from 'zod';

import { vehicleSchema } from './vehicle.js';
import { vinSchema } from './vin.js';

export const updateVehicleTransactionDataSchema = z.object({
  vin: vinSchema,
  changes: vehicleSchema.omit({ vin: true }).partial(),
});
export type UpdateVehicleTransactionData = z.infer<typeof updateVehicleTransactionDataSchema>;
