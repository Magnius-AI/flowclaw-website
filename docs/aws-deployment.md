# FlowClaw AWS Deployment Scaffold

This repository is configured for an AWS-first container deployment using Next.js standalone output.

## What is already scaffolded

- `next.config.ts` uses `output: "standalone"`
- Multi-stage `Dockerfile` builds and runs `.next/standalone/server.js`
- `.env.example` includes notification + AWS placeholders
- Mock app routes and pilot intake API are ready for UI/flow validation

## Recommended first path: AWS App Runner

1. **Create ECR repository** (for example: `flowclaw-agent-app`).
2. **Build and push image**:
   ```bash
   docker build -t flowclaw-agent-app .
   docker tag flowclaw-agent-app:latest <account>.dkr.ecr.<region>.amazonaws.com/flowclaw-agent-app:latest
   docker push <account>.dkr.ecr.<region>.amazonaws.com/flowclaw-agent-app:latest
   ```
3. **Create App Runner service** from that ECR image.
4. Configure environment variables from `.env.example` values.
5. Store secrets (`RESEND_API_KEY`) in App Runner secrets integration (or SSM/Secrets Manager).
6. Set health checks and autoscaling policies.

## ECS Fargate alternative

If you need VPC-level control early:

1. Push the same container to ECR.
2. Create ECS task definition exposing port `3000`.
3. Run via Fargate service behind ALB.
4. Use CloudWatch logs and target tracking autoscaling.

## CI/CD placeholder (GitHub Actions + OIDC)

Use GitHub OIDC to avoid long-lived AWS keys:

- Create an IAM role trusted by GitHub OIDC provider.
- Grant least-privilege access to ECR push and App Runner/ECS deploy.
- In Actions workflow, assume role and deploy on `main` merges.

Suggested future workflow stages:

1. `npm ci`
2. `npm run lint`
3. `npm run build`
4. `docker build`
5. `push to ECR`
6. `deploy App Runner` (or ECS)

## Later additions (post-scaffold)

When moving from mock to production control plane:

- **DynamoDB tables** for runs, approvals, workflows, audit events.
- **Cognito** for workforce auth + role claims.
- **EventBridge/SQS** for asynchronous run orchestration.
- **CloudTrail + centralized audit sink** for enterprise compliance reporting.

## Notes

- Pilot intake API intentionally works in non-production without Resend configured.
- In production, pilot intake requires `RESEND_API_KEY` + `NOTIFY_EMAIL`.
