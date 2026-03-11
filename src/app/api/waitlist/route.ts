import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { promises as fs } from "fs";
import path from "path";

const WAITLIST_PATH = path.join(process.cwd(), "waitlist.json");

interface WaitlistEntry {
  email: string;
  name?: string;
  timestamp: string;
}

async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(WAITLIST_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

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

    // Persist to file (works on Vercel for dev; swap for DB in prod)
    const waitlist = await readWaitlist();
    if (waitlist.some((e) => e.email === normalizedEmail)) {
      return NextResponse.json(
        { message: "You're already on the waitlist!" },
        { status: 200 }
      );
    }

    const entry: WaitlistEntry = {
      email: normalizedEmail,
      ...(name && { name: name.trim() }),
      timestamp: new Date().toISOString(),
    };

    waitlist.push(entry);
    await fs.writeFile(WAITLIST_PATH, JSON.stringify(waitlist, null, 2));

    // Send confirmation email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "hello@flowclaw.io";

    if (resendKey) {
      const resend = new Resend(resendKey);

      // Confirmation to the user
      await resend.emails.send({
        from: `flowClaw <${fromEmail}>`,
        to: normalizedEmail,
        subject: "You're on the flowClaw waitlist 🎉",
        html: `
          <div style="background:#0A0E1A;color:#E8ECF4;font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:40px 32px;border-radius:12px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:32px;">
              <span style="font-size:22px;font-weight:800;color:#fff;">flow<span style="color:#00E5CC;">Claw</span></span>
            </div>
            <h1 style="font-size:24px;font-weight:700;color:#fff;margin:0 0 16px;">You're in${name ? `, ${name.trim()}` : ""}! 🎉</h1>
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
                <li>Enterprise-grade security & multi-tenancy</li>
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

      // Internal notification
      const notifyEmail = process.env.NOTIFY_EMAIL;
      if (notifyEmail) {
        await resend.emails.send({
          from: `flowClaw <${fromEmail}>`,
          to: notifyEmail,
          subject: `New waitlist signup: ${normalizedEmail}`,
          html: `<p><strong>New signup</strong><br/>Email: ${normalizedEmail}${name ? `<br/>Name: ${name.trim()}` : ""}<br/>Time: ${entry.timestamp}</p>`,
        });
      }
    }

    return NextResponse.json({ message: "You're on the list!" }, { status: 201 });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
