import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function JobEmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-(--radius-xl) border border-dashed border-(--border) bg-(--surface) px-6 py-16 text-center">
      <SearchX className="size-10 text-(--muted-foreground)" aria-hidden />
      <h2 className="mt-4 text-lg font-semibold">No roles match these filters</h2>
      <p className="mt-2 max-w-sm text-sm text-(--muted-foreground)">
        Try clearing filters or adjusting your search. New opportunities are added regularly.
      </p>
      <Button type="button" variant="outline" className="mt-6" onClick={onReset}>
        Clear all filters
      </Button>
    </div>
  );
}
