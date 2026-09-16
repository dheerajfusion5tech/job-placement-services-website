import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PlacementPathways } from "../components/PlacementPathways";

export function ServicesPage() {
  return (
    <div>
      <section className="border-b border-(--border) bg-(--surface)">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-widest text-(--primary)">
            Placement solutions
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            How we place you
          </h1>
          <p className="mt-4 max-w-xl text-lg text-(--muted-foreground)">
            A clear, sequential pathway from discovery to growth — designed so you always
            know what comes next.
          </p>
          <Button asChild className="mt-8" size="lg">
            <a href="#pathways">Start your pathway</a>
          </Button>
        </div>
      </section>
      <PlacementPathways />
      <section className="border-t border-(--border) bg-(--surface)">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready for the next stage?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/jobs">Browse jobs</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Talk to a specialist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
