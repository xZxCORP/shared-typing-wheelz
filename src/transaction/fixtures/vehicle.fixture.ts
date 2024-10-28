import type { Vehicle } from '../vehicle.js';

export const vehicleFixture: Vehicle = {
  vin: 'ABCDEFGHIJKLMNOPQ',
  constructorName: 'Toyota',
  model: 'Corolla',
  year: 2022,
  risks: {
    exterior: [{ name: 'minor_scratch' }],
    mechanical: [],
    generic: [{ name: 'high_mileage' }],
  },
  sinisters: [
    {
      date: new Date('2023-01-01'),
      primaryFactor: 'distraction',
      injuryType: 'none',
      collisionType: 'rear_end',
      isWeekend: false,
      location: {
        description: 'Main St and 1st Ave',
        coordinates: {
          latitude: 40.7128,
          longitude: -74.006,
        },
      },
    },
  ],
  issues: {
    exterior: [],
    mechanical: [{ name: 'brake_wear' }],
    generic: [],
  },
};

export const incompleteVehicleFixture = {
  vin: 'ABCDEFGHIJKLMNOPQ',
};
