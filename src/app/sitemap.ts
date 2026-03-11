import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowclaw.io";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/nemoclaw-enterprise-ai-what-teams-need-to-know`,
      lastModified: new Date("2026-03-11"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
