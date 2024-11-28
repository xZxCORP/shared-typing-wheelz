import { z } from 'zod';

import { vinSchema } from './vin.js';

export const vehicleFeaturesSchema = z.object({
  brand: z.string().min(1),
  model: z.string().min(1),
  cvPower: z.coerce.number(),
  color: z.string().min(1),
  tvv: z.string().min(1),
  cnitNumber: z.string().min(1),
  receptionType: z.string().min(1),
  //F1
  technicallyAdmissiblePTAC: z.coerce.number(),
  //F2
  ptac: z.coerce.number(),
  //F3
  ptra: z.coerce.number().nullable(),
  //G
  ptService: z.coerce.number(),
  //G1
  ptav: z.coerce.number(),
  category: z.string().min(1),
  gender: z.string().min(1),
  ceBody: z.string().min(1),
  nationalBody: z.string().min(1),
  receptionNumber: z.string().min(1),
  displacement: z.coerce.number(),
  netPower: z.coerce.number(),
  energy: z.string().min(1),
  seatingNumber: z.coerce.number(),
  standingPlacesNumber: z.coerce.number().nullable(),
  sonorousPowerLevel: z.coerce.number(),
  engineSpeed: z.coerce.number(),
  co2Emission: z.coerce.number().nullable(),
  pollutionCode: z.string().min(1),
  powerMassRatio: z.coerce.number().nullable(),
});
export type VehicleFeatures = z.infer<typeof vehicleFeaturesSchema>;
export const vehicleInfosSchema = z.object({
  holderCount: z.coerce.number(),
  firstRegistrationInFranceDate: z.string(),
  firstSivRegistrationDate: z.string(),
  licensePlate: z.string(),
  sivConversionDate: z.string().nullable(),
});
export type VehicleInfos = z.infer<typeof vehicleInfosSchema>;
export const vehicleHistoryItemSchema = z.object({
  date: z.string(),
  type: z.string(),
});
export type VehicleHistoryItem = z.infer<typeof vehicleHistoryItemSchema>;
export const technicalControlItemSchema = z.object({
  date: z.string(),
  result: z.string(),
  resultRaw: z.string(),
  nature: z.string(),
  km: z.coerce.number(),
});
export type TechnicalControlItem = z.infer<typeof technicalControlItemSchema>;
export const sinisterInfosSchema = z.object({
  count: z.coerce.number(),
  lastResolutionDate: z.string().nullable(),
  lastSinisterDate: z.string().nullable(),
});
export type SinisterInfos = z.infer<typeof sinisterInfosSchema>;
export const vehicleSchema = z.object({
  vin: vinSchema,
  features: vehicleFeaturesSchema,
  infos: vehicleInfosSchema,
  history: z.array(vehicleHistoryItemSchema),
  technicalControls: z.array(technicalControlItemSchema),
  sinisterInfos: sinisterInfosSchema,
});
export type Vehicle = z.infer<typeof vehicleSchema>;
