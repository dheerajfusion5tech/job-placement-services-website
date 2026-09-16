import { useState } from "react";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: 1,
    title: "Discovery & Profiling",
    purpose: "We understand your strengths, goals, and constraints.",
    details:
      "Structured intake conversations, skills mapping, and preference capture so every recommendation is grounded in who you are and where you want to go.",
    timeline: "Typically 3–5 days",
  },
  {
    id: 2,
    title: "Opportunity Matching",
    purpose: "Roles that fit — not just roles that exist.",
    details:
      "Our specialists map your profile against open and upcoming positions, balancing skill fit, culture signals, and growth potential.",
    timeline: "Ongoing while active",
  },
  {
    id: 3,
    title: "Interview Preparation",
    purpose: "Show up ready and confident.",
    details:
      "Role-specific coaching, mock interviews, and feedback so you can present your experience clearly and handle the questions that matter.",
    timeline: "1–2 sessions per process",
  },
  {
    id: 4,
    title: "Placement & Onboarding",
    purpose: "From offer to first weeks with support.",
    details:
      "Offer guidance, negotiation support where appropriate, and check-ins during the early onboarding period so both sides start strong.",
    timeline: "Offer through first 30 days",
  },
  {
    id: 5,
    title: "Growth Follow-up",
    purpose: "Placement is a milestone, not an endpoint.",
    details:
      "Optional follow-up conversations to review progress and surface new opportunities as your career evolves.",
    timeline: "90-day and 6-month touchpoints",
  },
];

export function PlacementPathways() {
  const [active, setActive] = useState(1);

  return (
    <section id="pathways" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="lg:grid lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-12">
        {/* Spine / stage list */}
        <div className="relative mb-10 lg:mb-0">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-(--spine)/30 lg:left-[19px]" aria-hidden />
          <ul className="relative space-y-2">
            {stages.map((stage) => (
              <li key={stage.id}>
                <button
                  type="button"
                  onClick={() => setActive(stage.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-(--radius-md) px-2 py-2.5 text-left transition-colors",
                    active === stage.id
                      ? "bg-(--primary)/10 text-(--foreground)"
                      : "text-(--muted-foreground) hover:bg-(--surface-elevated) hover:text-(--foreground)"
                  )}
                  aria-current={active === stage.id ? "true" : undefined}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all",
                      active === stage.id
                        ? "bg-(--spine) text-(--primary-foreground) scale-110"
                        : "bg-(--surface-elevated) border border-(--border)"
                    )}
                  >
                    {stage.id}
                  </span>
                  <span className="text-sm font-medium leading-tight">{stage.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Active panel */}
        <div className="min-h-[280px]">
          {stages.map((stage) =>
            active === stage.id ? (
              <article
                key={stage.id}
                className="rounded-(--radius-xl) border border-(--border) bg-(--card) p-6 sm:p-8 animate-in fade-in duration-200"
              >
                <p className="text-sm font-medium text-(--primary)">Stage {stage.id}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">{stage.title}</h2>
                <p className="mt-2 text-(--muted-foreground)">{stage.purpose}</p>
                <p className="mt-5 leading-relaxed text-(--foreground)/90">{stage.details}</p>
                <p className="mt-6 text-sm font-medium text-(--muted-foreground)">
                  Timeline: <span className="text-(--foreground)">{stage.timeline}</span>
                </p>
              </article>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
