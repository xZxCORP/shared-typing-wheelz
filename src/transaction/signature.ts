import { z } from 'zod';

export const signatureSchema = z.object({
  signature: z.string(),
  signAlgorithm: z.string(),
});
export type Signature = z.infer<typeof signatureSchema>;
