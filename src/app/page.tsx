import Image from "next/image";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import WaitlistForm from "@/components/WaitlistForm";
import FadeIn from "@/components/FadeIn";

const features = [
  {
    title: "Approval Inbox",
    description:
      "High-risk agent actions stop for human review before they touch a customer, repo, invoice, or production system.",
    icon: "✅",
  },
  {
    title: "Agent Run Ledger",
    description:
      "Every run has an owner, status, decision trail, output, retry history, and audit record your team can inspect later.",
    icon: "📜",
  },
  {
    title: "Policy + Risk Gates",
    description:
      "Define what agents can do automatically, what needs approval, and what should be blocked before it creates damage.",
    icon: "🛡️",
  },
  {
    title: "SOP-to-Agent Builder",
    description:
      "Start with one real operating procedure and turn it into a controlled AI workflow instead of a fragile prompt chain.",
    icon: "📋",
  },
  {
    title: "Human-in-the-Loop Control",
    description:
      "Keep speed where AI is useful and judgment where humans are still required. No blind black-box automation.",
    icon: "👤",
  },
  {
    title: "Design Partner Pilot",
    description:
      "Bring one workflow. We map the failure modes, approval points, run history, and first working AI-assisted version.",
    icon: "🚀",
  },
];

const pilotPaths = [
  "AI coding agent review before PRs or deploys",
  "Sales follow-up drafts with approval before send",
  "Support triage with escalation rules",
  "Weekly operator report with suggested actions",
];

const steps = [
  {
    step: "01",
    title: "Map one SOP",
    description:
      "Pick a repeatable workflow where AI would help, but mistakes would be expensive or embarrassing.",
  },
  {
    step: "02",
    title: "Add controls",
    description:
      "We define approval gates, blocked actions, run states, evidence capture, and owner handoffs.",
  },
  {
    step: "03",
    title: "Pilot the agent workflow",
    description:
      "You get a controlled prototype, run ledger, and decision on whether the workflow deserves production buildout.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
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
            Request Pilot
          </a>
        </div>
      </nav>

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-teal/30 rounded-full text-teal text-sm bg-teal/10">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              Design partner pilots now open
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 id="waitlist" className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              AI agents you can actually trust.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              Turn repeatable workflows into AI-assisted runs with <span className="text-white">approval gates, run history, risk rules, and human control</span> built in.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="w-full flex justify-center">
            <WaitlistForm />
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-gray-500 text-sm">
              Best first fit: teams already testing AI agents, coding agents, automation, or SOP-heavy ops.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-teal/70 mb-10">
              The missing control layer for agentic work
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                before: "Agents run in chat threads with no durable audit trail.",
                after: "Every run has a ledger, owner, status, and evidence.",
                icon: "📊",
                label: "Run visibility",
              },
              {
                before: "AI can draft, push, send, or change things too freely.",
                after: "Risky actions wait in an approval inbox first.",
                icon: "🧯",
                label: "Safety before speed",
              },
              {
                before: "SOPs stay in docs while agents improvise around them.",
                after: "Your real SOP becomes the workflow contract.",
                icon: "🧭",
                label: "Procedure-backed automation",
              },
            ].map((item) => (
              <FadeIn key={item.label}>
                <div className="rounded-xl border border-white/[0.06] bg-navy-lighter/40 p-6 h-full flex flex-col gap-4"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm text-red-400/70 line-through leading-relaxed mb-2">{item.before}</p>
                    <p className="text-sm text-teal leading-relaxed">{item.after}</p>
                  </div>
                  <p className="mt-auto text-xs font-semibold text-white/60 uppercase tracking-wider">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="relative rounded-2xl border border-teal/20 bg-gradient-to-r from-teal/[0.04] via-transparent to-blue-500/[0.04] p-8 sm:p-10"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold mb-4">
                    FIRST OFFER · PAID PILOT
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Bring one SOP. Leave with a controlled AI workflow.
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    FlowClaw is not trying to be another broad AI platform. The first sale is a focused Agent Workflow Pilot: we take one repeatable process, map what can go wrong, add approval gates, and produce a working controlled workflow with a run ledger.
                  </p>
                </div>
                <div className="flex-shrink-0 grid grid-cols-2 gap-3 text-center">
                  {[
                    { label: "Approval Gates", icon: "✅" },
                    { label: "Run Ledger", icon: "📜" },
                    { label: "Policy Rules", icon: "🛡️" },
                    { label: "Pilot Scope", icon: "🚀" },
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

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Built for teams that want AI leverage without blind automation.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-400 leading-relaxed">
              FlowClaw gives operators a cockpit for AI-assisted work: what the agent tried, what it changed, what it needs approval for, and whether the workflow is ready to graduate from pilot to production.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
              What the pilot proves
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div className="group p-6 rounded-xl border border-white/[0.06] bg-navy-lighter/50 hover:border-teal/20 hover:bg-navy-lighter transition-all duration-300 h-full"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
                >
                  <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
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

      <section className="py-24 px-6 border-y border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Good first pilot workflows
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Start where AI can save time, but where a mistake still needs accountability.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pilotPaths.map((path, i) => (
              <FadeIn key={path} delay={i * 0.08}>
                <div className="rounded-xl border border-white/[0.06] bg-navy-lighter/40 p-5 text-gray-300">
                  <span className="text-teal font-bold mr-3">0{i + 1}</span>
                  {path}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
              From workflow risk to first controlled run
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

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="p-12 rounded-2xl border border-teal/10 bg-gradient-to-b from-teal/[0.03] to-transparent"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold mb-4">
                3 DESIGN PARTNER SLOTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Want to safely put one AI workflow to work?
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Request the FlowClaw Agent Workflow Pilot. We will start with one workflow, one owner, and one measurable automation win.
              </p>
              <div className="flex justify-center">
                <WaitlistForm compact />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

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
            &copy; 2026 flowClaw. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
