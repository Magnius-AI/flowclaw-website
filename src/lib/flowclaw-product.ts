export type ProductPillar = {
  title: string;
  summary: string;
  bullets: string[];
};

export type UseCase = {
  title: string;
  role: string;
  currentState: string;
  withFlowClaw: string;
};

export type MockAgentRun = {
  id: string;
  workflow: string;
  agent: string;
  status: "pending_approval" | "approved" | "running" | "completed" | "blocked";
  requestedBy: string;
  requestedAt: string;
  duration: string;
  risk: "low" | "medium" | "high";
  summary: string;
};

export type ProductMetric = {
  label: string;
  value: string;
  detail: string;
};

export type PilotOffer = {
  title: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string;
};

export type AwsChecklistItem = {
  step: string;
  owner: string;
  notes: string;
};

export const productPillars: ProductPillar[] = [
  {
    title: "Agent Approval Inbox",
    summary: "Review risky actions before they run, with context and one-click approve/deny controls.",
    bullets: [
      "Policy-based hold rules for spend, data exports, and external actions",
      "Escalation paths for finance, legal, and operations approvers",
      "Slack/email approvals now, SSO-bound approvals later",
    ],
  },
  {
    title: "SOP-to-Agent Builder",
    summary: "Turn written SOPs into repeatable agent workflows with guardrails and fallback steps.",
    bullets: [
      "Map SOP steps to tools, conditions, and human checkpoints",
      "Version workflows and compare updates before rollout",
      "Preflight checks that surface missing context before execution",
    ],
  },
  {
    title: "Agent Run Ledger",
    summary: "A full audit trail for every run: inputs, decisions, tool calls, approvals, and outcomes.",
    bullets: [
      "Timeline view with evidence attached to each decision",
      "Replay and postmortem mode for failed or high-risk runs",
      "Export-ready logs for compliance and incident reviews",
    ],
  },
];

export const useCases: UseCase[] = [
  {
    title: "Customer refund triage",
    role: "Support ops",
    currentState: "Agents draft responses but humans still chase context in three tools.",
    withFlowClaw: "Refund requests route through approval gates with policy context attached.",
  },
  {
    title: "Procurement intake",
    role: "Finance",
    currentState: "Requests arrive in email, then disappear into spreadsheets.",
    withFlowClaw: "SOP-backed agent runs classify, draft decisions, and log every approval.",
  },
  {
    title: "Sales handoff quality checks",
    role: "Revenue operations",
    currentState: "Manual QA catches issues after bad CRM updates already landed.",
    withFlowClaw: "High-impact CRM edits queue for review before writeback.",
  },
];

export const mockAgentRuns: MockAgentRun[] = [
  {
    id: "run_8fa1",
    workflow: "Vendor invoice verification",
    agent: "ap-inbox-agent",
    status: "pending_approval",
    requestedBy: "Maya Chen",
    requestedAt: "2026-05-31T09:20:00Z",
    duration: "Awaiting approval",
    risk: "high",
    summary: "Detected amount mismatch above $5,000 threshold. Waiting for finance approval.",
  },
  {
    id: "run_4cd2",
    workflow: "SOC2 evidence collection",
    agent: "audit-assistant",
    status: "completed",
    requestedBy: "Luca Romero",
    requestedAt: "2026-05-31T08:02:00Z",
    duration: "3m 42s",
    risk: "medium",
    summary: "Collected 12 artifacts, flagged one expired access review for follow-up.",
  },
  {
    id: "run_77be",
    workflow: "Renewal risk watchlist",
    agent: "revops-watchtower",
    status: "running",
    requestedBy: "Ari Patel",
    requestedAt: "2026-05-31T07:41:00Z",
    duration: "1m 08s",
    risk: "low",
    summary: "Scanning churn signals across Salesforce and support sentiment tags.",
  },
  {
    id: "run_2d11",
    workflow: "IT access deprovisioning",
    agent: "identity-ops-agent",
    status: "blocked",
    requestedBy: "Nora Diaz",
    requestedAt: "2026-05-30T22:16:00Z",
    duration: "5m 11s",
    risk: "high",
    summary: "Blocked by missing HR termination ticket attachment.",
  },
];

export const productMetrics: ProductMetric[] = [
  {
    label: "Pending approvals",
    value: "6",
    detail: "2 over SLA (30m)",
  },
  {
    label: "Run success rate",
    value: "98.2%",
    detail: "Last 7 days",
  },
  {
    label: "Human time saved",
    value: "41 hrs",
    detail: "This week",
  },
  {
    label: "Policy violations prevented",
    value: "14",
    detail: "Last 30 days",
  },
];

export const pilotOffers: PilotOffer[] = [
  {
    title: "90-minute SOP mapping sprint",
    summary: "We help your team convert one real SOP into an approval-aware agent workflow.",
    ctaLabel: "Request pilot",
    ctaHref: "#pilot",
  },
  {
    title: "Control-room mock deployment",
    summary: "Stand up the AWS-ready scaffold and run mock approvals with your operators.",
    ctaLabel: "Open mock app",
    ctaHref: "/app",
  },
  {
    title: "Run ledger design review",
    summary: "Pressure-test what evidence your auditors and executives actually need.",
    ctaLabel: "Book pilot call",
    ctaHref: "#pilot",
  },
];

export const awsDeploymentChecklist: AwsChecklistItem[] = [
  {
    step: "Build standalone Next.js artifact and container image",
    owner: "Platform",
    notes: "Use multi-stage Docker build and push to ECR.",
  },
  {
    step: "Deploy to App Runner (first) or ECS Fargate",
    owner: "Platform",
    notes: "Configure health checks, autoscaling, and environment variables.",
  },
  {
    step: "Attach secure secrets + internal notifications",
    owner: "Security",
    notes: "Store RESEND_API_KEY and NOTIFY_EMAIL in AWS Secrets Manager/SSM.",
  },
  {
    step: "Prepare DynamoDB + Cognito extension path",
    owner: "Product Engineering",
    notes: "Add runs/approvals tables and auth when moving beyond scaffold mode.",
  },
];
