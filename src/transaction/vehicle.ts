import { z } from 'zod';

const coordinatesSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
});
export type Coordinates = z.infer<typeof coordinatesSchema>;

const locationSchema = z.object({
  description: z.string(),
  coordinates: coordinatesSchema,
});
export type Location = z.infer<typeof locationSchema>;

const sinisterSchema = z.object({
  date: z.coerce.date(),
  type: z.string(),
  severity: z.string(),
  primaryFactor: z.string(),
  injuryType: z.string(),
  collisionType: z.string(),
  isWeekend: z.boolean(),
  location: locationSchema,
});
export type Sinister = z.infer<typeof sinisterSchema>;

const risksIssuesSchema = z.object({
  exterior: z.array(z.string()),
  mechanical: z.array(z.string()),
  generic: z.array(z.string()),
});
export type RisksIssues = z.infer<typeof risksIssuesSchema>;

export const vehicleSchema = z.object({
  vin: z.string(),
  constructorName: z.string(),
  model: z.string(),
  year: z.number().int(),
  risks: risksIssuesSchema,
  sinisters: z.array(sinisterSchema),
  issues: risksIssuesSchema,
});
export type Vehicle = z.infer<typeof vehicleSchema>;
