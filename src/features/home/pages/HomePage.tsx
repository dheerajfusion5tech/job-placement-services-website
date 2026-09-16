import { Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConstellationHero } from "../components/ConstellationHero";
import { TrustStrip } from "../components/TrustStrip";
import { GrowthNarrative } from "../components/GrowthNarrative";

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <ConstellationHero />
      <TrustStrip />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-(--radius-xl) border border-(--border) bg-(--card) p-8 transition-shadow hover:shadow-(--shadow-md)">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-(--radius-lg) bg-(--primary)/10 text-(--primary)">
              <Users className="size-6" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">For job seekers</h2>
            <p className="mt-3 text-(--muted-foreground)">
              A clear pathway from profile to placement. Coaching, matching, and support
              designed around your next role.
            </p>
            <Button asChild className="mt-6" variant="default">
              <Link to="/services">
                Explore pathways <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="group relative overflow-hidden rounded-(--radius-xl) border border-(--border) bg-(--card) p-8 transition-shadow hover:shadow-(--shadow-md)">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-(--radius-lg) bg-(--accent)/10 text-(--accent)">
              <Briefcase className="size-6" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">For employers</h2>
            <p className="mt-3 text-(--muted-foreground)">
              Precision hiring with curated shortlists, reduced time-to-hire, and
              placement specialists who understand your roles.
            </p>
            <Button asChild className="mt-6" variant="default">
              <Link to="/employers">
                Hiring solutions <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <GrowthNarrative />
      <section className="border-t border-(--border) bg-(--surface)">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to move forward?
          </h2>
          <p className="max-w-xl text-(--muted-foreground)">
            Whether you are looking for your next role or building a team, we are here
            to place the right people in the right opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/jobs">Browse opportunities</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Talk to us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
