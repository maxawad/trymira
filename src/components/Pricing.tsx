"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "MIRA Glasses",
    subtitle: "Non-Prescription",
    price: 649,
    features: ["Free shipping", "14-day returns", "1-year warranty"],
    cta: "Order Now →",
    featured: false,
  },
  {
    name: "MIRA Glasses",
    subtitle: "Prescription",
    price: 799,
    features: [
      "Custom 1.74 index lenses",
      "Free shipping",
      "1-year warranty",
    ],
    cta: "Order with Rx →",
    featured: true,
  },
];

function AnimatedPrice({ price, inView }: { price: number; inView: boolean }) {
  return (
    <span className="holographic-text text-5xl font-bold md:text-6xl">
      {inView ? `$${price}` : "$0"}
    </span>
  );
}

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center md:mb-24"
        >
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-muted">
            ORDER MIRA
          </p>
          <h2
            className="font-light"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
            }}
          >
            Answer anything. <span className="font-bold">Remember everything.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.subtitle}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`group holographic-border glass relative rounded-2xl p-8 transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] md:p-10 ${
                plan.featured ? "-mt-2 md:-mt-4" : ""
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full holographic-bg px-4 py-1 text-xs font-semibold text-black">
                  Most Popular
                </span>
              )}
              <p className="mb-1 text-xs tracking-widest text-muted uppercase">
                {plan.subtitle}
              </p>
              <h3 className="mb-6 text-xl font-bold">{plan.name}</h3>
              <AnimatedPrice price={plan.price} inView={inView} />
              <ul className="mb-8 mt-8 flex flex-col gap-3">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-3 text-sm text-muted"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="shrink-0 text-cyan"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="group/btn relative flex w-full items-center justify-center rounded-full py-3.5 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
              >
                <span className="holographic-bg absolute inset-0 rounded-full" />
                <span className="relative">{plan.cta}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
