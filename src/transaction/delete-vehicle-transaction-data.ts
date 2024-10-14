import { z } from 'zod';

export const deleteVehicleTransactionDataSchema = z.object({
  vin: z.string(),
});
export type DeleteVehicleTransactionData = z.infer<typeof deleteVehicleTransactionDataSchema>;
