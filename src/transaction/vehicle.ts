import { z } from 'zod';

const coordinatesSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});
export type Coordinates = z.infer<typeof coordinatesSchema>;

const locationSchema = z.object({
  description: z.string().min(1),
  coordinates: coordinatesSchema,
});
export type Location = z.infer<typeof locationSchema>;

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
export type Sinister = z.infer<typeof sinisterSchema>;

const risksIssuesSchema = z.object({
  exterior: z.array(z.string().min(1)),
  mechanical: z.array(z.string().min(1)),
  generic: z.array(z.string().min(1)),
});
export type RisksIssues = z.infer<typeof risksIssuesSchema>;

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
