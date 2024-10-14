import { z } from 'zod';

import { vehicleSchema } from './vehicle.js';

export const updateVehicleTransactionDataSchema = z.object({
  vin: z.string(),
  changes: vehicleSchema.omit({ vin: true }).partial(),
});
export type UpdateVehicleTransactionData = z.infer<typeof updateVehicleTransactionDataSchema>;
