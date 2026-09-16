import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function ConstellationHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-(--constellation-bg)">
      {/* Soft radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, var(--glow), transparent 70%)",
        }}
      />

      {/* Constellation nodes (decorative, CSS-driven) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[25%] h-3 w-3 animate-pulse rounded-full bg-(--constellation-node) opacity-70" />
        <div className="absolute left-[75%] top-[30%] h-2.5 w-2.5 animate-pulse rounded-full bg-(--constellation-node) opacity-50 [animation-delay:1s]" />
        <div className="absolute left-[40%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-(--accent) opacity-60 [animation-delay:2s]" />
        <div className="absolute left-[60%] top-[70%] h-3 w-3 animate-pulse rounded-full bg-(--constellation-node) opacity-40 [animation-delay:0.5s]" />
        <div className="absolute left-[20%] top-[65%] h-2 w-2 animate-pulse rounded-full bg-(--accent) opacity-50 [animation-delay:1.5s]" />
        <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
          <line x1="15%" y1="25%" x2="40%" y2="15%" stroke="var(--constellation-orbit)" strokeWidth="1" />
          <line x1="40%" y1="15%" x2="75%" y2="30%" stroke="var(--constellation-orbit)" strokeWidth="1" />
          <line x1="15%" y1="25%" x2="20%" y2="65%" stroke="var(--constellation-orbit)" strokeWidth="1" />
          <line x1="75%" y1="30%" x2="60%" y2="70%" stroke="var(--constellation-orbit)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-(--muted-foreground)">
          Career placement
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Your next role is already in orbit
        </h1>
        <p className="mt-6 max-w-xl text-lg text-(--muted-foreground) text-balance">
          JobPlace connects ambitious professionals with the right opportunities and
          helps employers hire with precision.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/services">Enter the constellation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/jobs">View open roles</Link>
          </Button>
        </div>

        {/* Pathway nodes */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <Link
            to="/services"
            className="group flex flex-col items-center gap-2 rounded-(--radius-xl) border border-(--border) bg-(--card)/80 px-8 py-6 backdrop-blur transition-all hover:border-(--primary) hover:shadow-(--shadow-md)"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-(--primary)/15 text-(--primary) transition-transform group-hover:scale-110">
              <span className="text-lg font-bold">S</span>
            </span>
            <span className="font-medium">Seekers</span>
            <span className="text-xs text-(--muted-foreground)">Find your path</span>
          </Link>
          <div className="hidden h-px w-12 bg-(--constellation-orbit) sm:block" aria-hidden />
          <Link
            to="/employers"
            className="group flex flex-col items-center gap-2 rounded-(--radius-xl) border border-(--border) bg-(--card)/80 px-8 py-6 backdrop-blur transition-all hover:border-(--accent) hover:shadow-(--shadow-md)"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-(--accent)/15 text-(--accent) transition-transform group-hover:scale-110">
              <span className="text-lg font-bold">E</span>
            </span>
            <span className="font-medium">Employers</span>
            <span className="text-xs text-(--muted-foreground)">Hire with clarity</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
