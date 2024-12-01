import { z } from "zod";

const envVarsSchema = z.object({
  GMAIL_PASSWORD: z.string(),
});

const envVars = envVarsSchema.safeParse(process.env);
if (!envVars.success) {
  // eslint-disable-next-line no-console
  console.error("There is an error with your environment variables.");
  throw envVars.error;
}

export const config = {
  gmail: {
    user: "sargissss4@gmail.com",
    password: envVars.data.GMAIL_PASSWORD,
  },
};
