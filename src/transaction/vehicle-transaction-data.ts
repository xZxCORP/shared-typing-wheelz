import { z } from 'zod';

import { createVehicleTransactionDataSchema } from './create-vehicle-transaction-data.js';
import { deleteVehicleTransactionDataSchema } from './delete-vehicle-transaction-data.js';
import { updateVehicleTransactionDataSchema } from './update-vehicle-transaction-data.js';

export const vehicleTransactionDataSchema = z.discriminatedUnion('action', [
  z.object({
    action: z.literal('create'),
    data: createVehicleTransactionDataSchema,
  }),
  z.object({
    action: z.literal('update'),
    data: updateVehicleTransactionDataSchema,
  }),
  z.object({
    action: z.literal('delete'),
    data: deleteVehicleTransactionDataSchema,
  }),
]);
export type VehicleTransactionData = z.infer<typeof vehicleTransactionDataSchema>;
