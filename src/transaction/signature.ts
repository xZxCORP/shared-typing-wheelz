import { z } from 'zod';

export const signatureSchema = z.object({
  signature: z.string(),
  signAlgorithm: z.string(),
});
export type Signature = z.infer<typeof signatureSchema>;

export const supportedSignAlgorithms = [
  'RSA-SHA256',
  'RSA-SHA384',
  'RSA-SHA512',
  'ECDSA-SHA256',
  'ECDSA-SHA384',
  'ECDSA-SHA512',
] as const;

export type SignAlgorithm = (typeof supportedSignAlgorithms)[number];
