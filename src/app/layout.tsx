import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "flowClaw — Orchestrate intelligence. Deploy agents that think.",
  description:
    "flowClaw is the AI agent runtime platform for deploying intelligent agents that execute complex multi-step tasks autonomously. Join the waitlist.",
  openGraph: {
    title: "flowClaw — Orchestrate intelligence. Deploy agents that think.",
    description:
      "The AI agent runtime platform for deploying intelligent agents that execute complex multi-step tasks autonomously.",
    siteName: "flowClaw",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
