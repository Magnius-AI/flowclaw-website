import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import HeroBackground from "@/components/HeroBackground";
import WaitlistForm from "@/components/WaitlistForm";
import { pilotOffers, productPillars, useCases } from "@/lib/flowclaw-product";

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
            href="#pilot"
            className="px-5 py-2 bg-teal text-navy text-sm font-bold rounded-lg hover:bg-teal-dark transition-all duration-200 shadow-[0_0_12px_rgba(0,229,204,0.25)] hover:shadow-[0_0_20px_rgba(0,229,204,0.4)]"
          >
            Join Design Pilot
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <HeroBackground />
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
          <FadeIn>
            <Image
              src="/logo-192.png"
              alt="flowClaw emblem"
              width={132}
              height={132}
              className="mx-auto drop-shadow-[0_0_40px_rgba(0,229,204,0.5)]"
              priority
            />
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-teal/30 rounded-full text-teal text-sm bg-teal/10">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              AWS-ready scaffold · human-in-the-loop control plane
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 id="pilot" className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              AI agents you can actually trust.
            </h1>
          </FadeIn>
          <FadeIn delay={0.18}>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              Turn SOPs into agentic workflows with approvals, run history, and human control built in.
            </p>
          </FadeIn>
          <FadeIn delay={0.24} className="w-full flex justify-center">
            <WaitlistForm />
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-500">
              <Link href="/app" className="text-teal hover:text-teal-dark transition-colors">
                Preview mock control room →
              </Link>
              <span className="hidden sm:inline text-white/20">•</span>
              <Link href="/blog" className="hover:text-gray-300 transition-colors">
                Read the blog
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Product wedges for trustworthy automation
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productPillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.08}>
                <div
                  className="rounded-xl border border-white/[0.06] bg-navy-lighter/50 p-6 h-full flex flex-col gap-4"
                  style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
                >
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{pillar.summary}</p>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-teal">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Start from real SOPs, not prompts in a vacuum
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
              Mock-first blueprint for operations, finance, and support teams that need accountability before full autonomy.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="rounded-xl border border-white/[0.06] bg-navy-lighter/40 p-6 h-full">
                  <p className="text-xs uppercase tracking-wide text-teal/80 font-semibold mb-2">{item.role}</p>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-red-300/70 mb-3">Today: {item.currentState}</p>
                  <p className="text-sm text-gray-300">With flowClaw: {item.withFlowClaw}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Choose your pilot path
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilotOffers.map((offer, i) => {
              const isExternalAnchor = offer.ctaHref.startsWith("#");
              const ctaClasses =
                "inline-flex items-center justify-center px-4 py-2 rounded-lg bg-teal text-navy font-semibold hover:bg-teal-dark transition-colors";

              return (
                <FadeIn key={offer.title} delay={i * 0.08}>
                  <div
                    className="rounded-xl border border-teal/20 bg-gradient-to-b from-teal/[0.06] to-transparent p-6 h-full flex flex-col"
                    style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{offer.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{offer.summary}</p>
                    <div className="mt-auto">
                      {isExternalAnchor ? (
                        <a href={offer.ctaHref} className={ctaClasses}>
                          {offer.ctaLabel}
                        </a>
                      ) : (
                        <Link href={offer.ctaHref} className={ctaClasses}>
                          {offer.ctaLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div
              className="p-12 rounded-2xl border border-teal/10 bg-gradient-to-b from-teal/[0.03] to-transparent"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold mb-4">
                Design partner intake
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Bring one SOP. Leave with an agent workflow scaffold.
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                We&apos;ll help you map approvals, risk checks, and run visibility for one high-value workflow.
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
          <p className="text-gray-500 text-sm">&copy; 2026 flowClaw. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
