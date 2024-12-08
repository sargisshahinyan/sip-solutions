import { z } from "zod";

export const isTime = (value: string): boolean => {
  return z.string().time().safeParse(value).success;
};
