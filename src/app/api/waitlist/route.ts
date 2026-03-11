import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const fromEmail = process.env.RESEND_FROM_EMAIL || "hello@flowclaw.io";
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const resend = new Resend(resendKey);

    // Confirmation email to the user
    await resend.emails.send({
      from: `flowClaw <${fromEmail}>`,
      to: normalizedEmail,
      subject: "You're on the flowClaw waitlist 🎉",
      html: `
        <div style="background:#0A0E1A;color:#E8ECF4;font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:40px 32px;border-radius:12px;">
          <div style="margin-bottom:32px;">
            <span style="font-size:22px;font-weight:800;color:#fff;">flow<span style="color:#00E5CC;">Claw</span></span>
          </div>
          <h1 style="font-size:24px;font-weight:700;color:#fff;margin:0 0 16px;">
            You're in${name ? `, ${String(name).trim()}` : ""}! 🎉
          </h1>
          <p style="color:#9CA3AF;line-height:1.6;margin:0 0 24px;">
            You've secured your spot on the flowClaw early access waitlist.
            We're building the AI agent runtime platform for the next generation of autonomous workflows —
            and you'll be among the first to get access.
          </p>
          <div style="background:#1A2035;border:1px solid rgba(0,229,204,0.1);border-radius:8px;padding:20px;margin:0 0 24px;">
            <p style="color:#00E5CC;font-weight:600;margin:0 0 8px;font-size:14px;">What's coming:</p>
            <ul style="color:#9CA3AF;margin:0;padding-left:20px;line-height:1.8;font-size:14px;">
              <li>Multi-step agent workflows</li>
              <li>Natural language AI queries</li>
              <li>Enterprise-grade security &amp; multi-tenancy</li>
              <li>Webhook integrations with any external system</li>
            </ul>
          </div>
          <p style="color:#6B7280;font-size:13px;margin:0;">
            We'll reach out when early access is ready. Stay tuned.<br/>
            — The flowClaw team
          </p>
        </div>
      `,
    });

    // Internal ping to you
    const notifyEmail = process.env.NOTIFY_EMAIL;
    if (notifyEmail) {
      await resend.emails.send({
        from: `flowClaw <${fromEmail}>`,
        to: notifyEmail,
        subject: `🎯 New waitlist signup: ${normalizedEmail}`,
        html: `
          <div style="font-family:system-ui,sans-serif;max-width:400px;padding:24px;">
            <h2 style="margin:0 0 12px;">New waitlist signup</h2>
            <p style="margin:4px 0;"><strong>Email:</strong> ${normalizedEmail}</p>
            ${name ? `<p style="margin:4px 0;"><strong>Name:</strong> ${String(name).trim()}</p>` : ""}
            <p style="margin:4px 0;"><strong>Time:</strong> ${new Date().toISOString()}</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ message: "You're on the list!" }, { status: 201 });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
