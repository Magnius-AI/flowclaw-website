import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog — flowClaw",
  description: "Thoughts on AI agents, NemoClaw, and building production-grade agent infrastructure.",
};

const posts = [
  {
    slug: "nemoclaw-enterprise-ai-what-teams-need-to-know",
    title: "NemoClaw is Shipping March 16. Here's What AI Teams Should Know.",
    excerpt:
      "NVIDIA's enterprise AI agent platform is about to drop at GTC 2026. We've been building around it for months. Here's a clear picture of what it is, what it handles, and what you'll still need to figure out on your own.",
    date: "March 11, 2026",
    readTime: "6 min read",
    tag: "NemoClaw",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-navy/60 border-b border-white/[0.04]">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-64.png" alt="flowClaw" width={36} height={36} className="drop-shadow-[0_0_8px_rgba(0,229,204,0.5)]" priority />
          <span className="text-xl font-bold">
            <span className="text-white">flow</span>
            <span className="text-teal">Claw</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-teal text-sm font-medium">Blog</Link>
          <Link href="/#waitlist" className="px-5 py-2 bg-teal text-navy text-sm font-bold rounded-lg hover:bg-teal-dark transition-all duration-200 shadow-[0_0_12px_rgba(0,229,204,0.25)]">
            Get Early Access
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold text-white mb-3">Blog</h1>
        <p className="text-gray-400 mb-16">Thoughts on AI agents, NemoClaw, and building production infrastructure.</p>

        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-7 rounded-xl border border-white/[0.06] bg-navy-lighter/30 hover:border-teal/20 hover:bg-navy-lighter/60 transition-all duration-300"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-0.5 bg-teal/10 border border-teal/20 rounded text-teal text-xs font-semibold">
                  {post.tag}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-600 text-sm">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-teal transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
