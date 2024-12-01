import { z } from "zod";

import { sendEmail } from "@/shared/services/sendEmail";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, message, name } = z
    .object({
      email: z.string().email(),
      message: z.string().min(2),
      name: z.string().min(2).max(50),
    })
    .parse(body);

  await sendEmail({
    to: email,
    subject: "New message from SIP solutions website",
    html: `
      <h1>New message from SIP solutions website</h1>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  });

  return Response.json({});
}
