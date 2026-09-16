const modules = [
  {
    title: "Quality of hire",
    body: "Candidates are profiled against role context, not just keywords. You receive people who can do the work and fit how your team operates.",
    weight: "lg" as const,
  },
  {
    title: "Speed",
    body: "Structured pipelines and specialist ownership keep processes moving. Typical time-to-shortlist is measured in days, not weeks.",
    weight: "md" as const,
  },
  {
    title: "Reduced risk",
    body: "Clear communication, interview support, and post-placement check-ins lower the cost of a wrong hire.",
    weight: "md" as const,
  },
];

export function ValueModules() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-3">
        {modules.map((m, i) => (
          <article
            key={m.title}
            className={`rounded-(--radius-xl) border border-(--border) bg-(--card) p-6 sm:p-8 ${
              i === 0 ? "lg:col-span-1 lg:row-span-1" : ""
            }`}
          >
            <h2 className="text-xl font-semibold tracking-tight">{m.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-(--muted-foreground)">{m.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
