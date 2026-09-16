import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FilterState } from "../pages/JobsPage";
import type { ExperienceLevel, JobType } from "../types/job";

type Props = {
  filters: FilterState;
  onChange: (next: FilterState) => void;
  onReset: () => void;
  resultCount: number;
  activeCount: number;
};

const types: Array<JobType | "All"> = ["All", "Full-time", "Contract", "Part-time"];
const levels: Array<ExperienceLevel | "All"> = ["All", "Entry", "Mid", "Senior", "Lead"];

export function JobFilters({ filters, onChange, onReset, resultCount, activeCount }: Props) {
  return (
    <div className="sticky top-16 z-30 mb-8 space-y-4 rounded-(--radius-xl) border border-(--border) bg-(--card) p-4 shadow-(--shadow-sm) sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-(--muted-foreground)" />
          <input
            type="search"
            placeholder="Search title, company, skills…"
            value={filters.query}
            onChange={(e) => onChange({ ...filters, query: e.target.value })}
            className="h-10 w-full rounded-(--radius-md) border border-(--input-border) bg-(--input) pl-10 pr-3 text-sm outline-none focus:border-(--ring) focus:ring-2 focus:ring-(--ring)/30"
            aria-label="Search jobs"
          />
        </div>
        <p className="text-sm text-(--muted-foreground) sm:shrink-0">
          {resultCount} role{resultCount === 1 ? "" : "s"}
          {activeCount > 0 ? ` · ${activeCount} filter${activeCount === 1 ? "" : "s"}` : ""}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <select
          value={filters.type}
          onChange={(e) => onChange({ ...filters, type: e.target.value as JobType | "All" })}
          className="h-9 rounded-(--radius-md) border border-(--input-border) bg-(--input) px-2 text-sm"
          aria-label="Job type"
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "All types" : t}
            </option>
          ))}
        </select>

        <select
          value={filters.experience}
          onChange={(e) =>
            onChange({ ...filters, experience: e.target.value as ExperienceLevel | "All" })
          }
          className="h-9 rounded-(--radius-md) border border-(--input-border) bg-(--input) px-2 text-sm"
          aria-label="Experience level"
        >
          {levels.map((l) => (
            <option key={l} value={l}>
              {l === "All" ? "All levels" : l}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) => onChange({ ...filters, location: e.target.value })}
          className="h-9 w-32 rounded-(--radius-md) border border-(--input-border) bg-(--input) px-2 text-sm sm:w-40"
          aria-label="Location"
        />

        <label className="flex h-9 cursor-pointer items-center gap-2 rounded-(--radius-md) border border-(--input-border) bg-(--input) px-3 text-sm">
          <input
            type="checkbox"
            checked={filters.remoteOnly}
            onChange={(e) => onChange({ ...filters, remoteOnly: e.target.checked })}
            className="size-3.5 accent-(--primary)"
          />
          Remote only
        </label>

        {activeCount > 0 && (
          <Button type="button" variant="ghost" size="sm" onClick={onReset} className="gap-1">
            <X className="size-3.5" /> Clear
          </Button>
        )}
      </div>
    </div>
  );
}
