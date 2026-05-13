"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const words = ["Welcome", "to", "Your", "Second", "Brain"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Animated gradient orbs */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/4 top-1/4 h-[40vw] w-[40vw] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)",
            animation: "float1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-1/4 top-1/3 h-[35vw] w-[35vw] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            animation: "float2 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 h-[30vw] w-[30vw] -translate-x-1/2 rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #FF00FF 0%, transparent 70%)",
            animation: "float3 22s ease-in-out infinite",
          }}
        />
      </div>

      {/* Dot grid overlay */}
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Mouse-tracking glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(139,92,246,0.06), transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 text-xs font-medium tracking-[0.3em] holographic-text"
        >
          THE GLASSES THAT THINK WITH YOU
        </motion.p>

        <h1
          className="mb-6 font-light"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block mr-[0.25em] ${
                word === "Second" || word === "Brain" ? "font-bold" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mb-10 max-w-xl text-lg text-muted leading-relaxed md:text-xl"
        >
          AI glasses that capture, translate, answer, and act — so nothing from
          your day gets lost.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            <span className="holographic-bg absolute inset-0 rounded-full" />
            <span className="relative">Order MIRA — $649</span>
          </a>
          <a
            href="#features"
            className="holographic-border rounded-full px-8 py-3.5 text-sm font-medium text-white transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            See Features ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
