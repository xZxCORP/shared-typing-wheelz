import { z } from 'zod';

export const vinSchema = z.string().min(17).max(17);
export type Vin = z.infer<typeof vinSchema>;
