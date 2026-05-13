"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    name: "Glasses",
    visual: "glasses",
    features: [
      "Dual waveguide display for crystal clarity",
      "Dual speakers for private audio",
      "No camera — private by design",
      "39g lightweight for all-day wear",
      "10 hours battery life",
      "Prescription & progressive lenses available",
    ],
  },
  {
    name: "Ring",
    visual: "ring",
    features: [
      "MIRA Ring",
      "Custom-fitted for each user",
      "Discreet gesture control",
      "Stainless steel construction",
      "Up to 7 days per charge",
      "< 2 hours full recharge",
    ],
  },
  {
    name: "App",
    visual: "app",
    features: [
      "Command center for infinite memory",
      "Review, export, search transcripts and summaries",
      "Customize display AI and brightness",
      "Available on iOS and desktop",
    ],
  },
];

function ProductVisual({ type }: { type: string }) {
  if (type === "glasses") {
    return (
      <div className="relative mx-auto flex h-32 w-56 items-center justify-center">
        <div className="absolute h-12 w-48 rounded-full border border-white/20 shadow-[0_0_30px_rgba(0,240,255,0.15),inset_0_0_20px_rgba(139,92,246,0.1)]" />
        <div className="absolute left-0 h-8 w-12 -translate-x-4 -translate-y-1 rotate-[15deg] rounded-full border border-white/10" />
        <div className="absolute right-0 h-8 w-12 translate-x-4 -translate-y-1 -rotate-[15deg] rounded-full border border-white/10" />
        <div className="absolute h-12 w-48 rounded-full" style={{ background: "linear-gradient(135deg, rgba(0,240,255,0.05), rgba(139,92,246,0.05), rgba(255,0,255,0.05))", animation: "pulse-glow 3s ease-in-out infinite" }} />
      </div>
    );
  }
  if (type === "ring") {
    return (
      <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
        <div className="absolute h-24 w-24 rounded-full border-2 border-white/20 shadow-[0_0_30px_rgba(139,92,246,0.2),inset_0_0_20px_rgba(0,240,255,0.1)]" />
        <div className="absolute h-16 w-16 rounded-full border border-white/10" />
        <div className="absolute h-24 w-24 rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08), transparent)", animation: "pulse-glow 3s ease-in-out infinite" }} />
      </div>
    );
  }
  return (
    <div className="relative mx-auto flex h-32 w-20 items-center justify-center">
      <div className="absolute h-28 w-16 rounded-xl border border-white/20 shadow-[0_0_30px_rgba(255,0,255,0.15)]" />
      <div className="absolute top-2 h-1 w-6 rounded-full bg-white/10" />
      <div className="absolute bottom-3 h-3 w-3 rounded-full border border-white/15" />
      <div className="absolute h-28 w-16 rounded-xl" style={{ background: "linear-gradient(180deg, rgba(0,240,255,0.04), rgba(255,0,255,0.04))", animation: "pulse-glow 3s ease-in-out infinite" }} />
    </div>
  );
}

export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="product" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center md:mb-24"
        >
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-muted">
            THE SYSTEM
          </p>
          <h2
            className="font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            Three Pieces. <span className="font-bold">One System.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="holographic-border glass group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              <h3 className="mb-6 text-center text-2xl font-bold">
                {product.name}
              </h3>
              <ProductVisual type={product.visual} />
              <ul className="mt-8 flex flex-col gap-3">
                {product.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full holographic-bg" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
