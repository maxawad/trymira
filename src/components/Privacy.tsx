"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    title: "No Camera",
    desc: "No camera means no surveillance. Peace of mind by design.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 11.5V5a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7"/><path d="m22 2-20 20"/><path d="M15.75 14.25L20 18"/></svg>
    ),
  },
  {
    title: "Audio Never Stored",
    desc: "Audio is instantly and permanently deleted. Only transcriptions saved.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
  },
  {
    title: "User-Controlled",
    desc: "Your data is never shared, sold, or used for training. Full control, always.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
];

export default function Privacy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden px-6 py-32 md:py-40">
      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-x-0 h-px bg-green-accent/20"
          style={{ animation: "scanline 6s linear infinite" }}
        />
      </div>

      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-green-accent">
            PRIVACY BY DESIGN
          </p>
          <h2
            className="font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            Your brain. <span className="font-bold">Your data.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-green-accent/10 bg-surface/60 p-8 backdrop-blur-sm transition-all hover:border-green-accent/25 hover:shadow-[0_0_30px_rgba(0,255,136,0.06)]"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-accent/10 text-green-accent">
                {pillar.icon}
              </span>
              <h3 className="mb-3 text-xl font-bold">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
