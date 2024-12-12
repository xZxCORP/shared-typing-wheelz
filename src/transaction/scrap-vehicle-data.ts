import { z } from 'zod';

import { vinSchema } from './vin.js';

export const scraVehicleDataSchema = z.object({
  vin: vinSchema,
  nom: z.string(),
  prenom: z.string(),
  immat: z.string(),
  numeroFormule: z.string(),
});

export type ScrapVehicleData = z.infer<typeof scraVehicleDataSchema>;
