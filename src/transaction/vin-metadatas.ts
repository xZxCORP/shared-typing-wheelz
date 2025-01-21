import { z } from 'zod';

export const vinMetadatasSchema = z.object({
  firstTransactionDate: z.coerce.date(),
  lastTransactionDate: z.coerce.date(),
});

export type VinMetadatas = z.infer<typeof vinMetadatasSchema>;
