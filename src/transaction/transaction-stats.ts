import { z } from 'zod';

import { dateValueSchema } from '../utils/index.js';
export const transactionStatusRepartitionSchema = z.object({
  total: z.number(),
  pending: z.number(),
  error: z.number(),
  finished: z.number(),
});
export type TransactionStatusRepartition = z.infer<typeof transactionStatusRepartitionSchema>;

export const transactionTypeRepartitionSchema = z.object({
  total: z.number(),
  create: z.number(),
  update: z.number(),
  delete: z.number(),
});
export type TransactionTypeRepartition = z.infer<typeof transactionTypeRepartitionSchema>;
export const transactionStatsSchema = z.object({
  evolution: z.array(dateValueSchema),
  anomalies: z.array(dateValueSchema),
  repartition: z.object({
    status: transactionStatusRepartitionSchema,
    type: transactionTypeRepartitionSchema,
  }),
});
export type TransactionStats = z.infer<typeof transactionStatsSchema>;
