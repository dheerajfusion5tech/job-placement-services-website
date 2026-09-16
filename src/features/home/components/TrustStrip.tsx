const metrics = [
  { value: "2,400+", label: "Placements completed" },
  { value: "180+", label: "Partner companies" },
  { value: "92%", label: "Candidate satisfaction" },
  { value: "28 days", label: "Average time to offer" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-(--border) bg-(--surface)">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4 sm:px-6 sm:py-12">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-2xl font-semibold tracking-tight text-(--foreground) sm:text-3xl">
              {m.value}
            </p>
            <p className="mt-1 text-xs text-(--muted-foreground) sm:text-sm">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
