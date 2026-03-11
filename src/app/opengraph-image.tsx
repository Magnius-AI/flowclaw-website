import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "flowClaw — Managed Platform for NVIDIA NemoClaw";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0E1A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,204,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,100,255,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* GTC badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,229,204,0.1)",
            border: "1px solid rgba(0,229,204,0.3)",
            borderRadius: 24,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#00E5CC",
            }}
          />
          <span style={{ color: "#00E5CC", fontSize: 18, fontWeight: 600 }}>
            NVIDIA GTC 2026 · March 16 · NemoClaw Day-1 Ready
          </span>
        </div>

        {/* Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://flowclaw.io/logo-192.png"
            width={80}
            height={80}
            alt="flowClaw"
            style={{ filter: "drop-shadow(0 0 20px rgba(0,229,204,0.6))" }}
          />
          <span style={{ fontSize: 72, fontWeight: 900, color: "white", letterSpacing: -2 }}>
            flow<span style={{ color: "#00E5CC" }}>Claw</span>
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            color: "#9CA3AF",
            margin: 0,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          The managed hosting layer for NVIDIA NemoClaw.
          Auth · Billing · NIM Inference · Observability.
        </p>

        {/* Bottom URL */}
        <p style={{ position: "absolute", bottom: 32, color: "#4B5563", fontSize: 18 }}>
          flowclaw.io
        </p>
      </div>
    ),
    { ...size }
  );
}
