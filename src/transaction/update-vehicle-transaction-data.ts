import { z } from 'zod';

import { vehicleSchema } from './vehicle.js';
import { vinSchema } from './vin.js';
const deepPartialItems = vehicleSchema
  .pick({
    features: true,
    infos: true,
    sinisterInfos: true,
  })
  //no alternative to deep partial eheh
  .deepPartial();
const partialItems = vehicleSchema
  .pick({
    history: true,
    technicalControls: true,
    attachedClientsIds: true,
  })
  .partial();
export const updateVehicleTransactionChangesSchema = z.object({
  ...deepPartialItems.shape,
  ...partialItems.shape,
});
export const updateVehicleTransactionDataSchema = z.object({
  vin: vinSchema,
  changes: updateVehicleTransactionChangesSchema,
});
export type UpdateVehicleTransactionData = z.infer<typeof updateVehicleTransactionDataSchema>;
export type UpdateVehicleTransactionChanges = z.infer<typeof updateVehicleTransactionChangesSchema>;
