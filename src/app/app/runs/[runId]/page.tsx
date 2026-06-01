import Link from "next/link";
import { notFound } from "next/navigation";
import { mockAgentRuns } from "@/lib/flowclaw-product";

type RunDetailPageProps = {
  params: Promise<{ runId: string }>;
};

const statusBadgeClass: Record<string, string> = {
  pending_approval: "bg-amber-400/15 text-amber-200 border-amber-300/30",
  approved: "bg-sky-400/15 text-sky-200 border-sky-300/30",
  running: "bg-blue-400/15 text-blue-200 border-blue-300/30",
  completed: "bg-emerald-400/15 text-emerald-200 border-emerald-300/30",
  blocked: "bg-rose-400/15 text-rose-200 border-rose-300/30",
};

export function generateStaticParams() {
  return mockAgentRuns.map((run) => ({ runId: run.id }));
}

export default async function RunDetailPage({ params }: RunDetailPageProps) {
  const { runId } = await params;
  const run = mockAgentRuns.find((item) => item.id === runId);

  if (!run) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-navy px-6 py-10">
      <div className="mx-auto max-w-4xl space-y-6">
        <Link href="/app" className="text-sm text-teal hover:text-teal-dark">
          ← Back to control room
        </Link>

        <header className="rounded-2xl border border-white/10 bg-navy-lighter/50 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-teal/80 mb-2">Mock run detail</p>
          <h1 className="text-3xl font-bold text-white">{run.workflow}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-300">
            <span className={`px-2.5 py-1 rounded-full border ${statusBadgeClass[run.status]}`}>
              {run.status.replace("_", " ")}
            </span>
            <span>Run ID: {run.id}</span>
            <span>•</span>
            <span>Agent: {run.agent}</span>
            <span>•</span>
            <span>Duration: {run.duration}</span>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-xl border border-white/10 bg-navy-lighter/40 p-5">
            <h2 className="text-lg font-semibold text-white mb-3">Run context</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="text-gray-400">Requested by:</span> {run.requestedBy}
              </li>
              <li>
                <span className="text-gray-400">Requested at:</span> {new Date(run.requestedAt).toLocaleString("en-US", { timeZone: "UTC" })} UTC
              </li>
              <li>
                <span className="text-gray-400">Risk profile:</span> {run.risk}
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-white/10 bg-navy-lighter/40 p-5">
            <h2 className="text-lg font-semibold text-white mb-3">Human control checkpoints</h2>
            <ul className="space-y-2 text-sm text-gray-300 list-disc pl-4">
              <li>Approval step enforced for high-risk external actions.</li>
              <li>Execution blocked when required evidence is missing.</li>
              <li>Every tool call and decision is written to the run ledger.</li>
            </ul>
          </article>
        </section>

        <section className="rounded-xl border border-white/10 bg-navy-lighter/40 p-5">
          <h2 className="text-lg font-semibold text-white mb-3">Summary</h2>
          <p className="text-sm text-gray-300 leading-relaxed">{run.summary}</p>
        </section>
      </div>
    </main>
  );
}
