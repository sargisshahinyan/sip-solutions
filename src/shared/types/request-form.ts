import { z } from "zod";

export const RequestFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string(),
  eventDate: z.string().date(),
  guestCount: z.number().min(1),
  addressOfEvent: z.string().min(2),
  startTime: z.string().time(),
  endTime: z.string().time(),
  preferredCocktails: z.enum(["Cocktails", "Mocktails", "Soft bar"]).array().min(1),
  shouldBringPortableBar: z.enum(["Yes", "No", "Not Sure"]),
  tipJar: z.enum(["Yes", "No"]),
  typeOfEvent: z.enum(["Wedding", "Birthday", "Anniversary", "Corporate event", "Home party", "your-answer"]),
  typeOfEventCustom: z.string().optional(),
  additionalEntertainment: z
    .enum(["Dry ice show", "Cotton candy machine", "Shaved ice machine", "Pop corn machine", "Bubble machine"])
    .array(),
  additionalServices: z
    .enum(["Hookah", "Personal Chef", "Waiter", "Vale Parking", "DJ or sound system", "Videography or photography"])
    .array(),
  moreAboutEvent: z.string().optional(),
});

export type RequestForm = z.infer<typeof RequestFormSchema>;
