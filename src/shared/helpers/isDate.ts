import { z } from "zod";

export const isDate = (value: string): boolean => {
  return z.string().date().safeParse(value).success;
};
