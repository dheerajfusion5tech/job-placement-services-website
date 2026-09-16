import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ValueModules } from "../components/ValueModules";
import { HiringWorkflow } from "../components/HiringWorkflow";

export function EmployersPage() {
  return (
    <div>
      <section className="border-b border-(--border) bg-(--surface)">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-(--primary)">
            For employers
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Hire with precision
          </h1>
          <p className="mt-4 max-w-xl text-lg text-(--muted-foreground)">
            Curated shortlists, faster time-to-hire, and placement specialists who
            understand the roles you need to fill.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Talk to a placement specialist</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#workflow">See how it works</a>
            </Button>
          </div>
        </div>
      </section>

      <ValueModules />
      <HiringWorkflow />

      <section className="border-t border-(--border) bg-(--surface)">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Request a shortlist
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-(--muted-foreground)">
            Tell us about the role. We respond with a clear engagement path and timeline.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
