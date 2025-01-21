import { z } from 'zod';

export const vinMetadatasSchema = z.object({
  firstTransactionDate: z.string(),
  lastTransactionDate: z.string(),
});

export type VinMetadatas = z.infer<typeof vinMetadatasSchema>;
