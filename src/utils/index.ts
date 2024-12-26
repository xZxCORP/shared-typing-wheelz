import { z } from 'zod';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
export const dateValueSchema = z.object({
  date: z.string(),
  value: z.number(),
});
