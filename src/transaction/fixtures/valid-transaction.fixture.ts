import type { VehicleTransaction } from '../vehicle-transaction.js';
import { signatureFixture } from './signature.fixture.js';
import { vehicleFixture } from './vehicle.fixture.js';

export const createTransactionFixture: VehicleTransaction = {
  id: '123',
  timestamp: new Date('2023-01-01T12:00:00Z'),
  action: 'create',
  data: vehicleFixture,
  dataSignature: signatureFixture,
  status: 'finished',
};

export const updateTransactionFixture: VehicleTransaction = {
  id: '123',
  timestamp: new Date('2023-01-02T12:00:00Z'),
  action: 'update',
  data: {
    vin: 'ABCDEFGHIJKLMNOPQ',
    changes: {
      model: 'Camry',
      year: 2023,
    },
  },
  status: 'finished',
  dataSignature: signatureFixture,
};

export const deleteTransactionFixture: VehicleTransaction = {
  id: '123',
  timestamp: new Date('2023-01-03T12:00:00Z'),
  action: 'delete',
  data: {
    vin: 'ABCDEFGHIJKLMNOPQ',
  },
  status: 'finished',
  dataSignature: signatureFixture,
};
