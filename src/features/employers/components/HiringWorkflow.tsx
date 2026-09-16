const steps = [
  { n: 1, title: "Brief", desc: "Role context, must-haves, culture signals, and timeline." },
  { n: 2, title: "Source & screen", desc: "Active search plus network; structured screening against the brief." },
  { n: 3, title: "Shortlist", desc: "A focused list of candidates with clear fit rationale." },
  { n: 4, title: "Interview support", desc: "Coordination, prep for both sides, and feedback capture." },
  { n: 5, title: "Offer & onboard", desc: "Offer guidance and early check-ins so the hire sticks." },
];

export function HiringWorkflow() {
  return (
    <section id="workflow" className="border-t border-(--border) bg-(--surface)">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Recruitment workflow
        </h2>
        <p className="mt-2 max-w-xl text-(--muted-foreground)">
          A transparent sequence so you always know where a search stands.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-(--radius-lg) border border-(--border) bg-(--card) p-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-(--primary) text-sm font-bold text-(--primary-foreground)">
                {s.n}
              </span>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-(--muted-foreground)">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
