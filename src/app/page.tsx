import Image from "next/image";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import WaitlistForm from "@/components/WaitlistForm";
import FadeIn from "@/components/FadeIn";

const features = [
  {
    title: "NIM Inference — Day 1",
    description:
      "Native NVIDIA NIM integration. Run Nemotron, DeepSeek, Llama and 40+ models with zero infrastructure setup.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Workflow Orchestration",
    description:
      "Chain AI actions into powerful composable pipelines.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Multi-Tenant Architecture",
    description:
      "Isolated workspaces for teams, organizations, and enterprises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Webhook Integrations",
    description:
      "Connect to any external system with event-driven architecture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.507a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Queries",
    description:
      "Natural language interface to query, analyze, and act on your data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Enterprise Security",
    description:
      "JWT authentication, role-based access control, production-ready.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    step: "01",
    title: "Design",
    description: "Define your agent workflows with our visual builder or code-first SDK.",
  },
  {
    step: "02",
    title: "Deploy",
    description: "Push to production with zero-downtime deployments and auto-scaling.",
  },
  {
    step: "03",
    title: "Scale",
    description: "Monitor, optimize, and scale your agents across global infrastructure.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ───── NAV ───── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-navy/60 border-b border-white/[0.04]">
        <div className="flex items-center gap-3">
          <Image src="/logo-64.png" alt="flowClaw logo" width={44} height={44} className="drop-shadow-[0_0_8px_rgba(0,229,204,0.5)]" priority />
          <span className="text-xl font-bold">
            <span className="text-white">flow</span>
            <span className="text-teal">Claw</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
            Blog
          </Link>
          <a
            href="#waitlist"
            className="px-5 py-2 bg-teal text-navy text-sm font-bold rounded-lg hover:bg-teal-dark transition-all duration-200 shadow-[0_0_12px_rgba(0,229,204,0.25)] hover:shadow-[0_0_20px_rgba(0,229,204,0.4)]"
          >
            Get Early Access
          </a>
        </div>
      </nav>

      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <HeroBackground />
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <FadeIn>
            <Image
              src="/logo-192.png"
              alt="flowClaw emblem"
              width={148}
              height={148}
              className="mx-auto drop-shadow-[0_0_40px_rgba(0,229,204,0.5)]"
              priority
            />
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://www.wired.com/story/nvidia-planning-ai-agent-platform-launch-open-source/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 border border-teal/30 rounded-full text-teal text-sm bg-teal/10 hover:bg-teal/15 transition-colors"
              >
                <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                NVIDIA NemoClaw launching March 16 at GTC 2026 — flowClaw is Day-1 ready
                <span className="text-teal/60 text-xs">↗</span>
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 id="waitlist" className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-white">flow</span>
              <span className="text-teal">Claw</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              Orchestrate intelligence. Deploy agents that think.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="w-full flex justify-center">
            <WaitlistForm />
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-gray-500 text-sm">
              Join 200+ teams pre-registering for NemoClaw Day-1 access. No spam, ever.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───── NEMOCLAW CALLOUT ───── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="relative rounded-2xl border border-teal/20 bg-gradient-to-r from-teal/[0.04] via-transparent to-blue-500/[0.04] p-8 sm:p-10"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold mb-4">
                    ⚡ MARCH 16 · GTC 2026
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    The managed hosting layer for NVIDIA NemoClaw
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    NemoClaw ships the agent runtime. flowClaw ships everything else —
                    multi-tenancy, auth, billing, run history, human-in-the-loop approvals,
                    observability, and webhooks. <strong className="text-white">Day-1 NIM inference support included.</strong>
                  </p>
                </div>
                <div className="flex-shrink-0 grid grid-cols-2 gap-3 text-center">
                  {[
                    { label: "NIM Inference", icon: "⚡" },
                    { label: "Multi-tenant", icon: "🏢" },
                    { label: "Approvals", icon: "🛡️" },
                    { label: "Run History", icon: "📊" },
                  ].map((item) => (
                    <div key={item.label} className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm">
                      <div className="text-xl mb-1">{item.icon}</div>
                      <div className="text-gray-300 font-medium text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── WHAT IS FLOWCLAW ───── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The Production Platform for AI Agents
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-400 leading-relaxed">
              Open-source runtimes like NemoClaw solve execution. flowClaw solves everything
              around it — the auth, billing, tenancy, monitoring, and human oversight
              that separates a weekend demo from a product enterprises will pay for.
              Think <strong className="text-white">Vercel for AI agents.</strong>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───── FEATURES ───── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
              Built for the agent era
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div className="group p-6 rounded-xl border border-white/[0.06] bg-navy-lighter/50 hover:border-teal/20 hover:bg-navy-lighter transition-all duration-300 h-full"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
                >
                  <div className="text-teal mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
              Three steps to autonomous AI
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.15}>
                <div className="relative text-center">
                  <span className="text-6xl font-black text-teal/10">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white -mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-teal/30">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── EARLY ACCESS CTA ───── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="p-12 rounded-2xl border border-teal/10 bg-gradient-to-b from-teal/[0.03] to-transparent"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold mb-4">
                ⚡ NemoClaw launches March 16
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Be ready when NemoClaw drops
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                NVIDIA announces NemoClaw at GTC 2026 on March 16.
                flowClaw is the Day-1 managed hosting platform — join the waitlist
                now and get priority access the moment it launches.
              </p>
              <div className="flex justify-center">
                <WaitlistForm compact />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="py-12 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo-64.png" alt="flowClaw logo" width={32} height={32} className="opacity-90 drop-shadow-[0_0_6px_rgba(0,229,204,0.4)]" loading="lazy" />
            <span className="text-xl font-bold">
              <span className="text-white">flow</span>
              <span className="text-teal">Claw</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; 2025 flowClaw. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
