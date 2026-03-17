import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NemoClaw Shipped. Here's What It Actually Is. — flowClaw Blog",
  description:
    "NemoClaw is live. The reality is more specific than pre-launch coverage suggested — it's a sandbox orchestration system, not a generic agent framework. Here's what that means for teams building on it.",
  openGraph: {
    title: "NemoClaw Shipped. Here's What It Actually Is.",
    description:
      "NemoClaw is live. The reality is more specific than pre-launch coverage suggested — it's a sandbox orchestration system, not a generic agent framework.",
    type: "article",
    publishedTime: "2026-03-17T00:00:00Z",
    authors: ["flowClaw Team"],
    tags: ["NemoClaw", "NVIDIA", "AI agents", "sandboxes", "OpenClaw", "NIM"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "NemoClaw Shipped. Here's What It Actually Is.",
  "description":
    "NemoClaw is live. The reality is more specific than pre-launch coverage suggested — it's a sandbox orchestration system, not a generic agent framework.",
  "datePublished": "2026-03-17T00:00:00Z",
  "dateModified": "2026-03-17T00:00:00Z",
  "author": { "@type": "Organization", "name": "flowClaw", "url": "https://flowclaw.io" },
  "publisher": {
    "@type": "Organization",
    "name": "flowClaw",
    "logo": { "@type": "ImageObject", "url": "https://flowclaw.io/logo-192.png" },
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://flowclaw.io/blog/nemoclaw-shipped-what-it-actually-is",
  },
  "keywords": ["NemoClaw", "NVIDIA", "AI agents", "sandboxes", "OpenClaw", "NIM"],
};

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</Link>
          <Link href="/#waitlist" className="px-5 py-2 bg-teal text-navy text-sm font-bold rounded-lg hover:bg-teal-dark transition-all duration-200 shadow-[0_0_12px_rgba(0,229,204,0.25)]">
            Get Early Access
          </Link>
        </div>
      </nav>

      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">flowClaw</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 bg-teal/10 border border-teal/20 rounded text-teal text-xs font-semibold">NemoClaw</span>
            <span className="text-gray-500 text-sm">March 17, 2026</span>
            <span className="text-gray-600 text-sm">7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            NemoClaw Shipped. Here&apos;s What It Actually Is.
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            NemoClaw is live. The reality is more specific than pre-launch coverage
            suggested — it&apos;s a sandbox orchestration system, not a generic agent
            framework. Here&apos;s what that means for teams building on it.
          </p>
        </div>

        {/* Body */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">NemoClaw is live</h2>
            <p>
              NemoClaw shipped March 16 at GTC 2026, right on schedule. Jensen presented it in the
              keynote, the repo went public, and the coverage was roughly what everyone expected — NVIDIA&apos;s
              answer to the OpenClaw acquisition, an open-source AI agent platform for enterprise teams.
            </p>
            <p className="mt-4">
              But now that the code is public and people are actually running it, the reality is more
              specific (and more interesting) than the pre-launch coverage suggested. NemoClaw isn&apos;t
              a generic AI agent framework. It&apos;s a sandbox orchestration system. That distinction matters
              if you&apos;re planning to build on it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What it actually is</h2>
            <p>
              NemoClaw is specifically a plugin for OpenClaw — NVIDIA&apos;s open-source fork/extension of
              the original Claw project. When you install NemoClaw, you&apos;re installing a CLI that
              provisions a fully isolated Linux sandbox via NVIDIA OpenShell and runs OpenClaw inside it.
            </p>
            <p className="mt-4">
              Each sandbox enforces isolation at the kernel level. Landlock restricts filesystem access.
              Seccomp filters syscalls. Network namespaces control egress. This isn&apos;t container-level
              isolation — it&apos;s OS-level enforcement. Every agent runs in its own locked-down environment,
              and the sandbox policy is not optional.
            </p>
            <p className="mt-4">
              Inference calls from inside the sandbox are intercepted by OpenShell and transparently
              routed to NVIDIA&apos;s cloud. The agent doesn&apos;t know or care where the model lives. From the
              agent&apos;s perspective, it&apos;s making a local API call. From the infrastructure&apos;s perspective,
              every call is hitting NVIDIA&apos;s NIM endpoints with full telemetry and access control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The CLI interface</h2>
            <p>
              This is the part that surprised people. NemoClaw isn&apos;t a web UI or a drag-and-drop
              workflow builder. It&apos;s a CLI. Here&apos;s what using it actually looks like:
            </p>
            <div className="my-6 p-5 rounded-lg bg-white/[0.03] border border-white/[0.06] font-mono text-sm">
              <div className="text-gray-400 mb-1"># Install NemoClaw + OpenShell sandbox runtime</div>
              <div className="text-teal">nemoclaw install</div>
              <div className="text-gray-400 mt-4 mb-1"># Connect to a running sandbox</div>
              <div className="text-teal">nemoclaw &lt;name&gt; connect</div>
              <div className="text-gray-400 mt-4 mb-1"># Check sandbox health</div>
              <div className="text-teal">nemoclaw &lt;name&gt; status</div>
              <div className="text-gray-400 mt-4 mb-1"># Stream logs from inside the sandbox</div>
              <div className="text-teal">nemoclaw &lt;name&gt; logs</div>
            </div>
            <p>
              That&apos;s it. You install the runtime, provision a sandbox, connect to it, and monitor it.
              There&apos;s no visual orchestration layer, no marketplace, no templates UI. It&apos;s infrastructure
              tooling for running isolated agents, and it does that one thing well.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The inference layer</h2>
            <p>
              NIM provides the model serving underneath. You get OpenAI-compatible endpoints — hit{" "}
              <code className="text-teal text-base bg-white/5 px-1.5 py-0.5 rounded">/v1/chat/completions</code>{" "}
              with a bearer token and get completions back. The production NemoClaw model is{" "}
              <code className="text-teal text-base bg-white/5 px-1.5 py-0.5 rounded">nvidia/nemotron-3-super-120b-a12b</code> —
              NVIDIA&apos;s Nemotron-3-Super-120B, a mixture-of-experts model specifically tuned for
              enterprise agent tasks.
            </p>
            <p className="mt-4">
              The clever part is the routing. Inside the sandbox, the agent makes inference calls
              like it&apos;s hitting a local endpoint. OpenShell intercepts those calls and routes them
              to NVIDIA&apos;s cloud transparently. The agent code doesn&apos;t need any cloud configuration,
              API keys, or endpoint URLs — the sandbox runtime handles all of that.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The production gap</h2>
            <p>
              NemoClaw is good at what it does: sandbox provisioning, agent isolation, and inference
              routing. What it doesn&apos;t have is everything you need to actually run this in production
              for real customers.
            </p>
            <p className="mt-4">
              Sandbox fleet management is the first gap. If you have 50 tenants each running 3 sandboxes,
              you need to provision, monitor, restart, and destroy those sandboxes programmatically. NemoClaw
              gives you the CLI for a single sandbox. It doesn&apos;t give you the fleet management layer.
            </p>
            <p className="mt-4">
              Configuration management is the second. Teams want to define a workflow config once, version it,
              and deploy it across tenants. NemoClaw doesn&apos;t have a blueprint or template system — you&apos;re
              managing config files manually per sandbox.
            </p>
            <p className="mt-4">
              Then there&apos;s the standard enterprise stack: auth, billing, multi-tenancy, run history,
              step-level logging, and human-in-the-loop approvals for high-risk actions. None of that
              is in NemoClaw, and none of it should be. A sandbox runtime is supposed to be a sandbox
              runtime. But if you&apos;re building a product, you&apos;ll need all of it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How flowClaw integrates</h2>
            <p>
              flowClaw wraps NemoClaw with the production layer it&apos;s missing. We shipped the integration
              on March 17 — one day after NemoClaw went public.
            </p>
            <p className="mt-4">
              The integration uses a dual-path execution model. In production on Linux, flowClaw
              talks to NemoClaw&apos;s CLI directly — provisioning real kernel-isolated sandboxes, managing
              their lifecycle, and streaming logs back through our API. In development on macOS (where
              Landlock/seccomp aren&apos;t available), we fall back to NIM HTTP calls so you can develop and
              test workflows without a Linux box. The engine auto-selects the right path based on environment.
            </p>
            <p className="mt-4">
              On top of that, we built a blueprint system. Teams define NemoClaw workflow configs as versioned
              blueprints through flowClaw&apos;s API. Deploy a blueprint and a sandbox is automatically provisioned,
              configured, and monitored. The full flow:{" "}
              <code className="text-teal text-base bg-white/5 px-1.5 py-0.5 rounded">POST /api/nemoclaw/blueprints/:id/deploy</code>{" "}
              → sandbox provisioned → agent running → health polling every 60 seconds.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What comes next</h2>
            <p>
              NemoClaw is alpha software — no official versioned releases yet, and the API surface will
              change. That&apos;s fine. The sandbox isolation model is sound, and the inference routing through
              OpenShell is genuinely clever. The foundation is solid.
            </p>
            <p className="mt-4">
              If you&apos;re a team planning to build on NemoClaw and you don&apos;t want to spend months on
              the production infrastructure layer, that&apos;s exactly the problem flowClaw solves. We&apos;re
              accepting early access signups now.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div
          className="mt-16 p-8 rounded-xl border border-teal/15 bg-gradient-to-b from-teal/[0.04] to-transparent text-center"
          style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
        >
          <p className="text-teal text-sm font-semibold mb-2">✅ NemoClaw is live</p>
          <h3 className="text-xl font-bold text-white mb-3">Skip the production infrastructure work</h3>
          <p className="text-gray-400 text-sm mb-6">
            Join the waitlist and get early access to flowClaw — the managed hosting platform for NemoClaw.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block px-8 py-3 bg-teal text-navy font-bold rounded-lg hover:bg-teal-dark transition-all duration-200 shadow-[0_0_20px_rgba(0,229,204,0.3)]"
          >
            Get Early Access
          </Link>
        </div>

        {/* Back to blog */}
        <div className="mt-12">
          <Link href="/blog" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
            ← Back to blog
          </Link>
        </div>
      </article>
    </main>
  );
}
