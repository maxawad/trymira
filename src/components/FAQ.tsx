"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What can MIRA Glasses do?",
    a: "Answer any question, translate 60+ languages in real time, do instant math, and give you perfect memory of every conversation.",
  },
  {
    q: "What about privacy?",
    a: "No camera. Audio is never stored, shared, or sold. Only transcriptions are saved, and you control everything.",
  },
  {
    q: "Is there a subscription?",
    a: "Core features are unlimited and free — transcription, translation, notes. Optional $20/month for unlimited AI assistant. Early customers get a free trial.",
  },
  {
    q: "Can I get prescription lenses?",
    a: "Yes! We offer custom 1.74 index lenses (the thinnest available) starting at $799.",
  },
  {
    q: "What's the battery life?",
    a: "10 hours on a single charge with a 40-minute full recharge. The ring lasts up to 7 days.",
  },
  {
    q: "Do you support Android?",
    a: "iOS only for now. Android support coming in the next few months.",
  },
  {
    q: "What's the return policy?",
    a: "14-day returns if you're not satisfied. Prescription lenses are non-refundable as they're custom-made.",
  },
];

function FAQItem({
  faq,
  index,
  open,
  toggle,
}: {
  faq: (typeof faqs)[number];
  index: number;
  open: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="border-b border-white/5"
    >
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-base font-medium md:text-lg pr-4">{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-xl text-muted"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-muted max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-muted">
            FAQ
          </p>
          <h2
            className="font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            Got <span className="font-bold">questions?</span>
          </h2>
        </motion.div>

        {inView && (
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                open={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
