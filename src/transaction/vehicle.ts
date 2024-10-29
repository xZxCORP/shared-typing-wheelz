import { z } from 'zod';

import { vinSchema } from './vin.js';

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
  primaryFactor: z.string().min(1),
  injuryType: z.string().min(1),
  collisionType: z.string().min(1),
  isWeekend: z.boolean(),
  location: locationSchema,
});
export type Sinister = z.infer<typeof sinisterSchema>;

export const riskIssueItem = z.object({
  name: z.string().min(1),
});
export type RiskIssueItem = z.infer<typeof riskIssueItem>;
const risksIssuesSchema = z.object({
  exterior: z.array(riskIssueItem),
  mechanical: z.array(riskIssueItem),
  generic: z.array(riskIssueItem),
});
export type RisksIssues = z.infer<typeof risksIssuesSchema>;

export const vehicleSchema = z.object({
  vin: vinSchema,
  constructorName: z.string().min(1),
  model: z.string().min(1),
  year: z.number().int(),
  risks: risksIssuesSchema,
  sinisters: z.array(sinisterSchema),
  issues: risksIssuesSchema,
});
export type Vehicle = z.infer<typeof vehicleSchema>;
