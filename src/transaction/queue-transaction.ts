import { z } from 'zod';

export const queueTransactionSchema = z.object({
  transactionId: z.string(),
});
export type QueueTransaction = z.infer<typeof queueTransactionSchema>;
