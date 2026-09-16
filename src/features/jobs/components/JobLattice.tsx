import { MapPin, Banknote, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Job } from "../types/job";
import { Link } from "@tanstack/react-router";

function formatSalary(min: number, max: number) {
  const fmt = (n: number) =>
    n >= 100000 ? `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L` : `₹${n.toLocaleString("en-IN")}`;
  return `${fmt(min)} – ${fmt(max)}`;
}

export function JobLattice({ jobs }: { jobs: Job[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <li key={job.id}>
          <article className="flex h-full flex-col rounded-(--radius-lg) border border-(--border) bg-(--lattice-cell) p-5 transition-colors hover:bg-(--lattice-cell-hover) hover:border-(--border-strong)">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="font-semibold leading-snug text-(--foreground)">{job.title}</h2>
                <p className="mt-0.5 text-sm text-(--muted-foreground)">{job.company}</p>
              </div>
              {job.remote && (
                <span className="shrink-0 rounded-(--radius-sm) bg-(--primary)/10 px-2 py-0.5 text-xs font-medium text-(--primary)">
                  Remote
                </span>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-(--muted-foreground)">
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" /> {job.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Banknote className="size-3.5" /> {formatSalary(job.salaryMin, job.salaryMax)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" /> {job.type} · {job.experience}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-(--radius-sm) border border-(--border) px-2 py-0.5 text-xs text-(--muted-foreground)"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-3 line-clamp-2 flex-1 text-sm text-(--muted-foreground)">
              {job.description}
            </p>

            <div className="mt-4 pt-1">
              <Button asChild size="sm" className="w-full">
                <Link to="/contact">Apply / Inquire</Link>
              </Button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
