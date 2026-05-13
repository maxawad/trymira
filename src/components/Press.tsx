"use client";

const outlets = [
  "TechCrunch",
  "Business Insider",
  "The Verge",
  "Forbes",
  "Wired",
  "Gizmodo",
];

export default function Press() {
  const doubled = [...outlets, ...outlets];

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mb-8 text-center">
        <p className="text-xs font-medium tracking-[0.3em] text-muted">
          IN THE NEWS
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
        <div
          className="flex w-max gap-16"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {doubled.map((name, i) => (
            <span
              key={i}
              className="shrink-0 text-3xl font-bold text-white/10 md:text-5xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
