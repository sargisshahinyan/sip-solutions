import { RequestFormSchema } from "@/shared/types/request-form";

import { sendEmail } from "@/shared/services/sendEmail";

import { config } from "@/config";

export async function POST(request: Request) {
  const body = await request.json();

  const { success, error, data } = RequestFormSchema.safeParse(body);
  if (!success) {
    return Response.json({ error: error.errors });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    eventDate,
    guestCount,
    addressOfEvent,
    startTime,
    endTime,
    preferredCocktails,
    shouldBringPortableBar,
    tipJar,
    typeOfEvent,
    typeOfEventCustom,
    additionalEntertainment,
    additionalServices,
    moreAboutEvent,
  } = data;

  await sendEmail({
    to: config.gmail.user,
    subject: "New request from SIP solutions website",
    html: `
      <h1>New request from SIP solutions website</h1>
      <p>First name: ${firstName}</p>
      <p>Last name: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Event date: ${eventDate}</p>
      <p>Guest count: ${guestCount}</p>
      <p>Address of event: ${addressOfEvent}</p>
      <p>Start time: ${startTime}</p>
      <p>End time: ${endTime}</p>
      <p>Preferred cocktails: ${preferredCocktails.join(", ")}</p>
      <p>Should bring portable bar: ${shouldBringPortableBar}</p>
      <p>Tip jar: ${tipJar}</p>
      <p>Type of event: ${typeOfEvent === "your-answer" ? typeOfEventCustom : typeOfEvent}</p>
      <p>Additional entertainment: ${additionalEntertainment.join(", ") || "-"}</p>
      <p>Additional services: ${additionalServices.join(", ") || "-"}</p>
      <p>More about event: ${moreAboutEvent?.trim() || "-"}</p>
    `,
  });

  return Response.json({});
}
