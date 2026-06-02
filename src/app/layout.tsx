import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowclaw.io"),
  title: "flowClaw — AI Agent Workflow Control Layer",
  description:
    "flowClaw helps teams run AI-agent workflows with approval gates, run history, policy rules, and human control. Request a design partner Agent Workflow Pilot.",
  keywords: ["AI agents", "agent workflows", "human-in-the-loop", "agent approvals", "run ledger", "SOP automation", "agent governance", "flowClaw"],
  openGraph: {
    title: "flowClaw — AI Agents You Can Actually Trust",
    description:
      "Turn repeatable workflows into AI-assisted runs with approval gates, run history, policy rules, and human control built in.",
    siteName: "flowClaw",
    type: "website",
    images: [{ url: "/logo-192.png", width: 192, height: 192, alt: "flowClaw logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "flowClaw — AI Agent Workflow Control Layer",
    description:
      "Approval gates, run ledgers, policy rules, and human control for AI-agent workflows.",
  },
  icons: {
    icon: [
      { url: "/logo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logo-192.png", sizes: "192x192", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "flowClaw",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Cloud",
  "url": "https://flowclaw.io",
  "description":
    "AI-agent workflow control layer with approval gates, run history, policy rules, SOP-to-agent pilots, and human-in-the-loop governance.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "description": "Design partner Agent Workflow Pilots are available by request.",
  },
  "publisher": {
    "@type": "Organization",
    "name": "flowClaw",
    "url": "https://flowclaw.io",
    "logo": {
      "@type": "ImageObject",
      "url": "https://flowclaw.io/logo-192.png",
      "width": 192,
      "height": 192,
    },
    "sameAs": ["https://github.com/Magnius-AI/flowclaw-website"],
  },
  "keywords": [
    "AI agents",
    "agent workflows",
    "human-in-the-loop approvals",
    "agent run ledger",
    "agent governance",
    "SOP automation",
    "AI workflow pilot",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
