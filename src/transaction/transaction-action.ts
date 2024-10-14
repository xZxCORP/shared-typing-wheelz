import { z } from 'zod';

export const transactionActionSchema = z.enum(['create', 'update', 'delete']);
export type TransactionAction = z.infer<typeof transactionActionSchema>;
