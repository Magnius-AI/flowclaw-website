import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Field Notes — flowClaw",
  description:
    "Field notes on controlled AI-agent workflows, approval gates, run ledgers, and human-in-the-loop automation.",
};

const notes = [
  {
    title: "Approval gates before autonomy",
    excerpt:
      "The first production question is not whether an agent can act. It is which actions should stop for human review before they touch a customer, repo, invoice, or system.",
    tag: "Governance",
  },
  {
    title: "Run history is the operator interface",
    excerpt:
      "A useful AI workflow needs a durable ledger: who requested the run, what the agent did, what changed, what failed, and what was approved.",
    tag: "Run Ledger",
  },
  {
    title: "Start with one SOP",
    excerpt:
      "The best first FlowClaw pilot is one repeatable workflow where AI can save time, but blind automation would create real risk.",
    tag: "Pilot",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-navy/60 border-b border-white/[0.04]">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-64.png" alt="flowClaw" width={36} height={36} className="drop-shadow-[0_0_8px_rgba(0,229,204,0.5)]" priority />
          <span className="text-xl font-bold">
            <span className="text-white">flow</span>
            <span className="text-teal">Claw</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link>
          <Link href="/#waitlist" className="px-5 py-2 bg-teal text-navy text-sm font-bold rounded-lg hover:bg-teal-dark transition-all duration-200 shadow-[0_0_12px_rgba(0,229,204,0.25)]">
            Request Pilot
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4">Field Notes</p>
        <h1 className="text-4xl font-bold text-white mb-3">Controlled AI-agent workflows</h1>
        <p className="text-gray-400 mb-12">
          Practical notes on approval gates, run ledgers, policy rules, and the human control layer teams need before putting agents into real operations.
        </p>

        <div className="flex flex-col gap-6 mb-12">
          {notes.map((note) => (
            <div
              key={note.title}
              className="p-7 rounded-xl border border-white/[0.06] bg-navy-lighter/30"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              <span className="inline-block px-2 py-0.5 bg-teal/10 border border-teal/20 rounded text-teal text-xs font-semibold mb-3">
                {note.tag}
              </span>
              <h2 className="text-xl font-bold text-white mb-2">{note.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{note.excerpt}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-teal/20 bg-teal/[0.04] p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have one workflow AI should help with, but not run blindly?</h2>
          <p className="text-gray-400 mb-6">Request the FlowClaw Agent Workflow Pilot and we will map the approval points, run ledger, and first controlled version.</p>
          <Link href="/#waitlist" className="inline-block px-8 py-3 bg-teal text-navy font-bold rounded-lg hover:bg-teal-dark transition-all duration-200 shadow-[0_0_20px_rgba(0,229,204,0.3)]">
            Request Pilot
          </Link>
        </div>
      </div>
    </main>
  );
}
