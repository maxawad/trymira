"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    num: "01",
    name: "Capture",
    desc: "Search through your memories and past conversations. Nothing from your day gets lost.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42"/></svg>
    ),
  },
  {
    num: "02",
    name: "Act",
    desc: "Tell MIRA to do something, confirm it, have it done. Send emails. Book rides. Make plans. Handle tasks.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
  },
  {
    num: "03",
    name: "Translate",
    desc: "Understand 60+ languages instantly through your lenses. Two-way translation for full conversations.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
  },
  {
    num: "04",
    name: "Answer",
    desc: "Ask anything and see AI-powered answers instantly. Like having a genius on standby.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.09 6.26L20.18 9l-5 4.09L16.18 20 12 16.54 7.82 20l1-6.91-5-4.09 6.09-.74z"/></svg>
    ),
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 40 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="holographic-border glass group relative rounded-2xl p-8 md:p-12"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
        <div className="flex shrink-0 flex-col items-start gap-4">
          <span
            className="holographic-text text-7xl font-bold leading-none opacity-30 md:text-8xl"
          >
            {feature.num}
          </span>
          <span className="text-cyan">{feature.icon}</span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-bold md:text-4xl">{feature.name}</h3>
          <p className="max-w-lg text-lg leading-relaxed text-muted">
            {feature.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-muted">
            CAPABILITIES
          </p>
          <h2
            className="font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            The Glasses That <span className="font-bold holographic-text">Think</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {features.map((f, i) => (
            <FeatureCard key={f.num} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
