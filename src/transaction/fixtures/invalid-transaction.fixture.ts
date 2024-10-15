import { createTransactionFixture, deleteTransactionFixture } from './valid-transaction.fixture.js';
import { vehicleFixture } from './vehicle.fixture.js';

export const transactionWithInvalidActionFixture = {
  ...createTransactionFixture,
  action: 'invalid',

  data: {
    ...createTransactionFixture.data,
  },
};

export const transactionWithInvalidVinFixture = {
  ...createTransactionFixture,
  data: {
    ...createTransactionFixture.data,
    ...vehicleFixture,
    vin: 'INVALID',
  },
};

export const transactionWithInvalidYearFixture = {
  ...createTransactionFixture,
  data: {
    ...createTransactionFixture.data,

    ...vehicleFixture,
    year: 1800,
  },
};

export const transactionWithInvalidSignatureFixture = {
  ...deleteTransactionFixture,
  dataSignature: {},
};
