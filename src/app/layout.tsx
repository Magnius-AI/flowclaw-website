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
  twitter: {
    card: "summary_large_image",
    title: "flowClaw — Managed Platform for NVIDIA NemoClaw",
    description:
      "NemoClaw ships the agent runtime. flowClaw ships everything else. Day-1 NIM inference support. Join the waitlist.",
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
    "The managed hosting platform for NVIDIA NemoClaw and enterprise AI agents. Multi-tenancy, auth, billing, NIM inference, human-in-the-loop approvals, and observability — Day-1 ready for GTC 2026.",
  "offers": {
    "@type": "Offer",
    "price": "199",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "199",
      "priceCurrency": "USD",
      "unitText": "MONTH",
    },
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
    "NemoClaw",
    "NVIDIA NIM",
    "AI agent platform",
    "NemoClaw hosted",
    "NemoClaw managed hosting",
    "enterprise AI agents",
    "GTC 2026",
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
