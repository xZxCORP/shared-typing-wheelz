import { z } from 'zod';

const coordinatesSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

const locationSchema = z.object({
  description: z.string().min(1),
  coordinates: coordinatesSchema,
});

const sinisterSchema = z.object({
  date: z.coerce.date(),
  type: z.string().min(1),
  severity: z.string().min(1),
  primaryFactor: z.string().min(1),
  injuryType: z.string().min(1),
  collisionType: z.string().min(1),
  isWeekend: z.boolean(),
  location: locationSchema,
});

const risksIssuesSchema = z.object({
  exterior: z.array(z.string().min(1)),
  mechanical: z.array(z.string().min(1)),
  generic: z.array(z.string().min(1)),
});

export const vehicleSchema = z.object({
  vin: z.string().min(17).max(17),
  constructorName: z.string().min(1),
  model: z.string().min(1),
  year: z.number().int(),
  risks: risksIssuesSchema,
  sinisters: z.array(sinisterSchema),
  issues: risksIssuesSchema,
});
export type Vehicle = z.infer<typeof vehicleSchema>;
