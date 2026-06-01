import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const pilotRequestSchema = z.object({
  email: z.email(),
  name: z.string().trim().min(1).max(120).optional(),
  company: z.string().trim().min(1).max(180).optional(),
  workflow: z.string().trim().min(1).max(1000).optional(),
  offer: z.string().trim().min(1).max(180).optional(),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(request: NextRequest) {
  let jsonBody: unknown;

  try {
    jsonBody = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = pilotRequestSchema.safeParse(jsonBody);

  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid request payload.", errors: parsed.error.flatten() }, { status: 400 });
  }

  const payload = {
    ...parsed.data,
    email: parsed.data.email.trim().toLowerCase(),
  };
  const safePayload = {
    email: escapeHtml(payload.email),
    name: payload.name ? escapeHtml(payload.name) : undefined,
    company: payload.company ? escapeHtml(payload.company) : undefined,
    workflow: payload.workflow ? escapeHtml(payload.workflow).replace(/\n/g, "<br/>") : undefined,
    offer: payload.offer ? escapeHtml(payload.offer) : undefined,
  };

  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "hello@flowclaw.io";

  if (!resendKey || !notifyEmail) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { message: "Pilot intake notifications are not configured on this deployment." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Pilot request received. Notifications are disabled in this environment." },
      { status: 200 }
    );
  }

  try {
    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: `flowClaw <${fromEmail}>`,
      to: notifyEmail,
      subject: `New FlowClaw pilot request · ${payload.email}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;padding:20px;line-height:1.55;">
          <h2 style="margin:0 0 12px;">New pilot request</h2>
          <p><strong>Email:</strong> ${safePayload.email}</p>
          ${safePayload.name ? `<p><strong>Name:</strong> ${safePayload.name}</p>` : ""}
          ${safePayload.company ? `<p><strong>Company:</strong> ${safePayload.company}</p>` : ""}
          ${safePayload.offer ? `<p><strong>Offer:</strong> ${safePayload.offer}</p>` : ""}
          ${safePayload.workflow ? `<p><strong>Workflow:</strong><br/>${safePayload.workflow}</p>` : ""}
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Pilot request received. We will follow up shortly." }, { status: 200 });
  } catch (error) {
    console.error("pilot-request notify failure", error);
    return NextResponse.json({ message: "Unable to send pilot request notification." }, { status: 502 });
  }
}
