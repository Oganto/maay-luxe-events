import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Handles inquiries submitted from the Contact section.
//
// The primary delivery path is WhatsApp: the Contact form opens a wa.me
// link with the inquiry pre-filled, straight to Maay Luxe's WhatsApp
// number. This route is a secondary server-side log/backup only — it's
// called in the background and doesn't block the WhatsApp handoff.
//
// If you'd also like inquiries emailed (e.g. as a backup record), the
// simplest path on Vercel is Resend:
//   1. npm install resend
//   2. Set RESEND_API_KEY in Vercel project env vars
//   3. Uncomment the Resend block below
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
