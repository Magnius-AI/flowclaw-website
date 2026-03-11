"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const validate = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !re.test(email)) {
      setEmailError("Please enter a valid email");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(json.message || "You're on the list!");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(json.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-2xl mb-2">🎉</p>
          <p className="text-teal font-semibold text-lg">{message}</p>
          <p className="text-gray-400 text-sm mt-1">Check your inbox — we&apos;ll be in touch.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className={`flex flex-col gap-3 w-full ${compact ? "max-w-md" : "max-w-lg"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {!compact && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name (optional)"
              className="w-full px-4 py-3 bg-navy-lighter border border-white/10 rounded-lg text-foreground placeholder:text-gray-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-colors"
            />
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-navy-lighter border border-white/10 rounded-lg text-foreground placeholder:text-gray-500 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-colors"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-3 bg-teal text-navy font-bold rounded-lg hover:bg-teal-dark transition-all duration-200 disabled:opacity-60 shadow-[0_0_20px_rgba(0,229,204,0.3)] hover:shadow-[0_0_30px_rgba(0,229,204,0.5)] cursor-pointer whitespace-nowrap"
            >
              {status === "loading" ? "Joining..." : "Get Early Access"}
            </button>
          </div>
          {emailError && <p className="text-red-400 text-sm">{emailError}</p>}
          {status === "error" && <p className="text-red-400 text-sm">{message}</p>}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
