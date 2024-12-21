import { z } from 'zod';

import { vinSchema } from './vin.js';

export const scrapVehicleDataSchema = z.object({
  vin: vinSchema,
  nom: z.string().min(1),
  prenom: z.string().min(1),
  immat: z.string().min(1),
  numeroFormule: z.string().min(1),
});

export type ScrapVehicleData = z.infer<typeof scrapVehicleDataSchema>;
