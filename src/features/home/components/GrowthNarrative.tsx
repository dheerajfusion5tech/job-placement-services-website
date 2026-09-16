export function GrowthNarrative() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-(--primary)">
            Career growth
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Placement is not the finish line
          </h2>
          <p className="mt-4 text-(--muted-foreground) leading-relaxed">
            We stay engaged after the offer. From onboarding check-ins to growth
            conversations, our process is built to support lasting career momentum —
            for people and for the teams that hire them.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-(--muted-foreground)">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary)" />
              Structured profiling and role alignment
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary)" />
              Interview coaching and feedback loops
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary)" />
              Post-placement support for both sides
            </li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-(--radius-xl) border border-(--border)">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
            alt="Professionals collaborating in a modern workplace"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
