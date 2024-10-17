import { z } from 'zod';

export const vehicleTransactionCompletedSchema = z.object({
  transactionId: z.string(),
  completedAt: z.coerce.date(),
});

export type VehicleTransactionCompleted = z.infer<typeof vehicleTransactionCompletedSchema>;
