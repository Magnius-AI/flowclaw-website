# FlowClaw Agent App Scaffold Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Reposition FlowClaw from managed agent hosting to an AWS-ready agent-control application scaffold focused on approvals, SOP-to-agent workflows, and run history.

**Architecture:** Keep the existing Next.js application. Add product model data, a public landing refactor, mock app dashboard routes, validated API intake, and AWS deployment scaffolding. Prefer small, static/mock-first UI surfaces that validate positioning before building production auth or databases.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript, Zod, Resend, Docker/standalone Next.js for AWS App Runner/ECS.

---

### Task 1: Add product model and AWS deployment skeleton

**Objective:** Create reusable data/config files plus AWS deployment docs and container scaffolding.

**Files:**
- Create: `src/lib/flowclaw-product.ts`
- Create: `.env.example`
- Create: `Dockerfile`
- Create: `.dockerignore`
- Create: `docs/aws-deployment.md`
- Modify: `next.config.ts`

**Steps:**
1. Create `src/lib/flowclaw-product.ts` with arrays for: product pillars, use cases, mock agent runs, metrics, pilot offers, and AWS deployment checklist.
2. Update `next.config.ts` to `output: "standalone"` for AWS container deployments.
3. Add a multi-stage Dockerfile that runs `npm ci`, `npm run build`, and starts `.next/standalone/server.js`.
4. Add `.dockerignore` for node_modules, .next, out, coverage, logs, env files.
5. Add `.env.example` with Resend vars, notification email, public app URL, AWS region, DynamoDB placeholder table names.
6. Add `docs/aws-deployment.md` documenting AWS App Runner/ECS first path, OIDC GitHub Actions placeholders, and later DynamoDB/Cognito additions.

**Verification:** `npm run build` should still compile.

---

### Task 2: Refactor homepage positioning

**Objective:** Make the landing page about trustworthy agent workflows, not NemoClaw infrastructure.

**Files:**
- Modify: `src/app/page.tsx`

**Steps:**
1. Replace hero headline/subhead with: “AI agents you can actually trust.” and “Turn SOPs into agentic workflows with approvals, run history, and human control built in.”
2. Keep the existing visual language, logo, WaitlistForm, and motion components.
3. Replace the primary feature list with three wedges: Agent Approval Inbox, SOP-to-Agent Builder, Agent Run Ledger.
4. Add product-card/fake-door section with CTAs linking to `#pilot` or `/app`.
5. Preserve blog link and waitlist form.
6. Remove or de-emphasize unsupported “NVIDIA NemoClaw shipped” claims on the primary hero.

**Verification:** `npm run lint` and `npm run build`.

---

### Task 3: Add mock app routes

**Objective:** Scaffold the application surface for FlowClaw’s first product.

**Files:**
- Create: `src/app/app/page.tsx`
- Create: `src/app/app/runs/[runId]/page.tsx`

**Steps:**
1. `/app` should show dashboard sections for pending approvals, recent runs, reliability, and weekly ROI.
2. `/app/runs/[runId]` should render a mock run detail page using the product data and `generateStaticParams`.
3. Keep it auth-free and clearly mock/scaffolded. No database required yet.
4. Use only existing dependencies.

**Verification:** Direct routes compile in `npm run build`.

---

### Task 4: Add pilot intake API

**Objective:** Capture design-partner interest without committing to a full backend.

**Files:**
- Create: `src/app/api/pilot-request/route.ts`

**Steps:**
1. Validate request body with Zod: email, name optional, company optional, workflow optional, offer optional.
2. If `RESEND_API_KEY` and `NOTIFY_EMAIL` exist, send internal notification.
3. Always avoid storing secrets. If Resend is not configured, return success in non-production and a clear 500 in production.
4. Return JSON `{ message: string }` on success.

**Verification:** `npm run lint`, `npm run build`.

---

### Task 5: Final verification

**Objective:** Confirm the scaffold is buildable and ready for PR.

**Commands:**
- `npm ci`
- `npm run lint`
- `npm run build`
- `git diff --check`

**Commit:** `feat: scaffold agent control application`
