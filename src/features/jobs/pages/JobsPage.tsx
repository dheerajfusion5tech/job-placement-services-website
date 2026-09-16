import { useMemo, useState } from "react";
import { MOCK_JOBS } from "../data/jobs";
import type { ExperienceLevel, JobType } from "../types/job";
import { JobFilters } from "../components/JobFilters";
import { JobLattice } from "../components/JobLattice";
import { JobEmptyState } from "../components/JobEmptyState";

export type FilterState = {
  query: string;
  type: JobType | "All";
  experience: ExperienceLevel | "All";
  remoteOnly: boolean;
  location: string;
};

const initialFilters: FilterState = {
  query: "",
  type: "All",
  experience: "All",
  remoteOnly: false,
  location: "",
};

export function JobsPage() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filtered = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const q = filters.query.trim().toLowerCase();
      if (q) {
        const hay = `${job.title} ${job.company} ${job.tags.join(" ")} ${job.description}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filters.type !== "All" && job.type !== filters.type) return false;
      if (filters.experience !== "All" && job.experience !== filters.experience) return false;
      if (filters.remoteOnly && !job.remote) return false;
      if (filters.location.trim()) {
        if (!job.location.toLowerCase().includes(filters.location.trim().toLowerCase())) {
          return false;
        }
      }
      return true;
    });
  }, [filters]);

  const activeCount =
    (filters.query ? 1 : 0) +
    (filters.type !== "All" ? 1 : 0) +
    (filters.experience !== "All" ? 1 : 0) +
    (filters.remoteOnly ? 1 : 0) +
    (filters.location ? 1 : 0);

  return (
    <div>
      <section className="border-b border-(--border) bg-(--surface)">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Open opportunities
          </h1>
          <p className="mt-2 max-w-xl text-(--muted-foreground)">
            Explore roles matched through our placement network. Filter by what matters
            to you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <JobFilters
          filters={filters}
          onChange={setFilters}
          onReset={() => setFilters(initialFilters)}
          resultCount={filtered.length}
          activeCount={activeCount}
        />
        {filtered.length === 0 ? (
          <JobEmptyState onReset={() => setFilters(initialFilters)} />
        ) : (
          <JobLattice jobs={filtered} />
        )}
      </div>
    </div>
  );
}
