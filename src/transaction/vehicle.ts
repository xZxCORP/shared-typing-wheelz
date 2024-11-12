import { z } from 'zod';

import { vinSchema } from './vin.js';

export const vehicleFeaturesSchema = z.object({
  brand: z.string().min(1),
  model: z.string().min(1),
  cvPower: z.number(),
  color: z.string().min(1),
  tvv: z.string().min(1),
  cnitNumber: z.string().min(1),
  receptionType: z.string().min(1),
  //F1
  technicallyAdmissiblePTAC: z.number(),
  //F2
  ptac: z.number(),
  //F3
  ptra: z.number().nullish(),
  //G
  ptService: z.number(),
  //G1
  ptav: z.number(),
  category: z.string().min(1),
  gender: z.string().min(1),
  ceBody: z.string().min(1),
  nationalBody: z.string().min(1),
  receptionNumber: z.string().min(1),
  displacement: z.number(),
  netPower: z.number(),
  energy: z.string().min(1),
  seatingNumber: z.number(),
  standingPlacesNumber: z.number().nullish(),
  sonorousPowerLevel: z.number(),
  engineSpeed: z.number(),
  co2Emission: z.number().nullish(),
  pollutionCode: z.string().min(1),
  powerMassRatio: z.number().nullish(),
});
export type VehicleFeatures = z.infer<typeof vehicleFeaturesSchema>;
export const vehicleInfosSchema = z.object({
  holderCount: z.number(),
  firstRegistrationInFranceDate: z.string(),
  firstSivRegistrationDate: z.string(),
  licensePlate: z.string(),
  sivConversionDate: z.string().nullish(),
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
  km: z.number(),
});
export type TechnicalControlItem = z.infer<typeof technicalControlItemSchema>;
export const sinisterInfosSchema = z.object({
  count: z.number(),
  lastResolutionDate: z.string().nullish(),
  lastSinisterDate: z.string().nullish(),
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
