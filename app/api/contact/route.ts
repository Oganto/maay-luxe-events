import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Handles inquiries submitted from the Contact section.
//
// Currently this validates the payload and logs it — no email/CRM
// credentials have been provided yet, so nothing is actually sent.
//
// To wire up real delivery on Vercel, the simplest path is Resend:
//   1. npm install resend
//   2. Set RESEND_API_KEY in Vercel project env vars
//   3. Uncomment the Resend block below
// Any other provider (Nodemailer + SMTP, SendGrid, a CRM webhook, etc.)
// works the same way — swap the block that sends `data`.
// ---------------------------------------------------------------------------

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  location?: string;
  guestCount?: string;
  vision?: string;
};

export async function POST(request: Request) {
  let data: ContactPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!data.name?.trim() || !data.email?.trim()) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  // TODO: replace this log with real delivery once an email/CRM provider is chosen.
  console.log("New Maay Luxe inquiry:", data);

  /*
  // Example wiring for Resend — uncomment once RESEND_API_KEY is set in Vercel:
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Maay Luxe Website <inquiries@maayluxeevents.com>",
    to: "maayluxeevents@gmail.com",
    subject: `New inquiry from ${data.name}`,
    text: JSON.stringify(data, null, 2),
  });
  */

  return NextResponse.json({ ok: true });
}
