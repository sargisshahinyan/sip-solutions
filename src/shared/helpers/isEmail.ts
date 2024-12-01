import { z } from "zod";

export const isEmail = (value: string): boolean => {
  return z.string().email().safeParse(value).success;
};
