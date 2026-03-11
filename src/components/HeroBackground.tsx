"use client";

// Pure CSS animations — runs on GPU compositor thread, no JS per frame
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Animated gradient blobs — CSS only */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Subtle grid overlay */}
      <div className="hero-grid" />
    </div>
  );
}
