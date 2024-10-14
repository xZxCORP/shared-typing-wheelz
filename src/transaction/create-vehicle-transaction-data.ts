import type { z } from 'zod';

import type { vehicleSchema } from './vehicle.js';

export { vehicleSchema as createVehicleTransactionDataSchema } from './vehicle.js';
export type CreateVehicleTransactionData = z.infer<typeof vehicleSchema>;
