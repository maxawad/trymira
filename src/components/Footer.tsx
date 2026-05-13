"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer className="relative px-6 pb-12 pt-32 md:pt-40">
      <div className="mx-auto max-w-4xl" ref={ref}>
        {/* Large CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:mb-32"
        >
          <h2
            className="mb-8 font-light"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            Welcome to Your{" "}
            <span className="font-bold holographic-text">Second Brain</span>
          </h2>
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-black transition-shadow hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
          >
            <span className="holographic-bg absolute inset-0 rounded-full" />
            <span className="relative">Order MIRA →</span>
          </a>
        </motion.div>

        {/* Footer content */}
        <div className="flex flex-col items-center gap-8 border-t border-white/5 pt-12 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <span className="text-xl font-bold holographic-text">MIRA</span>
            <a
              href="mailto:team@trymira.com"
              className="text-sm text-muted transition-colors hover:text-white"
            >
              team@trymira.com
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Features", "Product", "Pricing", "FAQ"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-dark">
          &copy; 2026 MIRA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
