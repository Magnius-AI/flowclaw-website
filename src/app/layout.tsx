import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowclaw.io"),
  title: "flowClaw — AI Agents You Can Actually Trust",
  description:
    "flowClaw turns SOPs into agentic workflows with approvals, run history, and human control built in. Start with one workflow and prove ROI before platformizing.",
  keywords: ["AI agents", "agent workflows", "human-in-the-loop", "agent approvals", "SOP automation", "agent run history", "agent reliability", "flowClaw"],
  openGraph: {
    title: "flowClaw — AI Agents You Can Actually Trust",
    description:
      "Turn SOPs into agentic workflows with approvals, run history, reliability scoring, and human control built in.",
    siteName: "flowClaw",
    type: "website",
    images: [{ url: "/logo-192.png", width: 192, height: 192, alt: "flowClaw logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "flowClaw — AI Agents You Can Actually Trust",
    description:
      "Agentic workflows with approvals, run history, and human control built in.",
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
    "Agentic workflow control plane for SOP-to-agent automation, human approval gates, run history, and reliability tracking.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Design partner pilots are available by request.",
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
    "SOP automation",
    "agent run history",
    "agent reliability",
    "operator automation",
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
