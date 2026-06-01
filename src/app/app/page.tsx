import Link from "next/link";
import { mockAgentRuns, productMetrics } from "@/lib/flowclaw-product";

const statusBadgeClass: Record<string, string> = {
  pending_approval: "bg-amber-400/15 text-amber-200 border-amber-300/30",
  approved: "bg-sky-400/15 text-sky-200 border-sky-300/30",
  running: "bg-blue-400/15 text-blue-200 border-blue-300/30",
  completed: "bg-emerald-400/15 text-emerald-200 border-emerald-300/30",
  blocked: "bg-rose-400/15 text-rose-200 border-rose-300/30",
};

export default function AppControlRoomPage() {
  const pendingApprovals = mockAgentRuns.filter((run) => run.status === "pending_approval");
  const recentRuns = mockAgentRuns.slice(0, 4);

  return (
    <main className="min-h-screen bg-navy px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-2xl border border-white/10 bg-navy-lighter/60 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-teal/80 mb-2">FlowClaw mock app scaffold</p>
          <h1 className="text-3xl font-bold text-white">Agent Control Room</h1>
          <p className="mt-2 text-gray-400">
            Auth-free mock surface for approvals, reliability tracking, and run visibility.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productMetrics.map((metric) => (
            <article key={metric.label} className="rounded-xl border border-white/10 bg-navy-lighter/40 p-5">
              <p className="text-sm text-gray-400">{metric.label}</p>
              <p className="mt-2 text-2xl font-bold text-white">{metric.value}</p>
              <p className="mt-1 text-xs text-teal/90">{metric.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:col-span-2 rounded-xl border border-white/10 bg-navy-lighter/40 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Pending approvals</h2>
              <span className="text-xs text-gray-400">{pendingApprovals.length} items</span>
            </div>
            <div className="space-y-4">
              {pendingApprovals.map((run) => (
                <div key={run.id} className="rounded-lg border border-amber-200/20 bg-amber-100/5 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-white">{run.workflow}</p>
                    <span className="text-xs text-amber-200">Risk: {run.risk}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-300">{run.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-400">
                    <span>Requested by {run.requestedBy}</span>
                    <span>•</span>
                    <span>{run.agent}</span>
                    <span>•</span>
                    <Link className="text-teal hover:text-teal-dark" href={`/app/runs/${run.id}`}>
                      View run details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-white/10 bg-navy-lighter/40 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Weekly ROI (mock)</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start justify-between gap-3">
                <span>Manual review time avoided</span>
                <span className="font-semibold text-white">41 hrs</span>
              </li>
              <li className="flex items-start justify-between gap-3">
                <span>Escalations auto-routed</span>
                <span className="font-semibold text-white">27</span>
              </li>
              <li className="flex items-start justify-between gap-3">
                <span>Approvals inside SLA</span>
                <span className="font-semibold text-white">93%</span>
              </li>
              <li className="flex items-start justify-between gap-3">
                <span>Estimated savings</span>
                <span className="font-semibold text-teal">$12.4k</span>
              </li>
            </ul>
          </article>
        </section>

        <section className="rounded-xl border border-white/10 bg-navy-lighter/40 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent runs</h2>
          <div className="space-y-3">
            {recentRuns.map((run) => (
              <div key={run.id} className="rounded-lg border border-white/10 bg-navy/50 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-white font-medium">{run.workflow}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {run.agent} · {run.duration} · requested by {run.requestedBy}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${statusBadgeClass[run.status]}`}>
                    {run.status.replace("_", " ")}
                  </span>
                  <Link href={`/app/runs/${run.id}`} className="text-sm text-teal hover:text-teal-dark">
                    Open
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
