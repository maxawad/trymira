"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "No camera", label: "Privacy" },
  { value: "<500ms", label: "Response time" },
  { value: "60+", label: "Languages" },
  { value: "39g", label: "Lightweight" },
  { value: "10 hrs", label: "Battery" },
  { value: "∞", label: "Memory" },
];

function AnimatedStat({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setShow(true), index * 100);
      return () => clearTimeout(timer);
    }
  }, [inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-1 px-4 py-3 md:px-8"
    >
      <span className="holographic-text text-2xl font-bold md:text-3xl">
        {stat.value}
      </span>
      <span className="text-xs text-muted tracking-wider uppercase">
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass holographic-border flex flex-wrap items-center justify-center divide-white/5 rounded-2xl md:divide-x">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mx-auto mt-6 h-px w-full max-w-2xl origin-left holographic-bg"
        />
      </div>
    </section>
  );
}
