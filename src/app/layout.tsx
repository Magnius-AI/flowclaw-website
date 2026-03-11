import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowclaw.io"),
  title: "flowClaw — Managed Hosting for NVIDIA NemoClaw & AI Agents",
  description:
    "flowClaw is the production platform for NVIDIA NemoClaw. Multi-tenancy, auth, billing, NIM inference, human-in-the-loop approvals, and observability — Day-1 ready for GTC 2026. Join the waitlist.",
  keywords: ["NemoClaw", "NVIDIA NIM", "AI agents", "NemoClaw hosting", "AI agent platform", "NemoClaw managed", "GTC 2026", "flowClaw"],
  openGraph: {
    title: "flowClaw — The Managed Platform for NVIDIA NemoClaw",
    description:
      "NemoClaw ships the agent runtime. flowClaw ships everything else. Multi-tenancy, auth, billing, NIM inference, and observability. Day-1 ready.",
    siteName: "flowClaw",
    type: "website",
    images: [{ url: "/logo-192.png", width: 192, height: 192, alt: "flowClaw logo" }],
  },
  icons: {
    icon: [
      { url: "/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logo-192.png", sizes: "192x192", type: "image/png" }],
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
