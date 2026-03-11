import { NextRequest, NextResponse } from "next/server";
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

    const waitlist = await readWaitlist();

    if (waitlist.some((entry) => entry.email === email)) {
      return NextResponse.json(
        { message: "You're already on the waitlist!" },
        { status: 200 }
      );
    }

    const entry: WaitlistEntry = {
      email: email.trim().toLowerCase(),
      ...(name && { name: name.trim() }),
      timestamp: new Date().toISOString(),
    };

    waitlist.push(entry);
    await fs.writeFile(WAITLIST_PATH, JSON.stringify(waitlist, null, 2));

    return NextResponse.json(
      { message: "You're on the list!" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
