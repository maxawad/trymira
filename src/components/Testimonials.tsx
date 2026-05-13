"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "He said he feels too naked without it cause the battery died.",
    author: "Ara K.",
  },
  {
    quote:
      "The speed of accurate live-translation during a foreign language meeting is AMAZING! Nothing else comes close!",
    author: "Flash Bri",
    tag: "MIRA Customer",
  },
  {
    quote:
      "These glasses are amazing. Your waveguide is really nice! Live translation is my favorite.",
    author: "Marshall F.",
  },
  {
    quote:
      "FYI, I have Meta and Oakley glasses. MIRA showed more utility in 10 minutes than all others combined.",
    author: "Terence J.",
  },
  {
    quote:
      "The translation feature is amazing. My mother-in-law is from Taiwan and it eases the language gap.",
    author: "Ryan R.",
  },
  {
    quote: "OH MY GOD THESE MEETINGS FINALLY MAKE SENSE",
    author: "Ara K.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-muted">
            REAL REACTIONS
          </p>
          <h2
            className="font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            From <span className="font-bold">1,900+</span> customers.
          </h2>
        </motion.div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: (i % 2 === 0 ? -1 : 1) }}
              animate={
                inView
                  ? { opacity: 1, y: 0, rotate: 0 }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                <div className="absolute inset-x-0 top-0 h-px holographic-bg" />
                <p className="mb-4 text-base leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    {t.author}
                  </span>
                  {t.tag && (
                    <span className="text-xs text-muted">· {t.tag}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
