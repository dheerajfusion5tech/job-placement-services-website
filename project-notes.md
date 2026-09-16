# Project Notes — Job Placement Services Website

## 1. Project overview

**JobPlace** is a frontend-only career placement website. It serves two audiences: job seekers looking for placement support and employers seeking recruitment solutions.

This document describes the **actual** implementation decisions, architecture, and limitations of the delivered project.

## 2. Purpose

- Communicate trust, accessibility, career growth, and recruitment capability
- Provide a distinctive visual language (not a generic staffing template)
- Deliver functional job discovery and contact experiences on the frontend

## 3. Pages and routes

| Route | Page | UI concept |
|-------|------|------------|
| `/` | Homepage | Career Constellation |
| `/services` | Services | Placement Pathways |
| `/jobs` | Job Listings | Opportunity Lattice |
| `/employers` | Employers | Hiring Command Surface |
| `/contact` | Contact | Direct Line |
| `/project-notes` | Project notes | Clean Markdown renderer |

Footer contains a **Project notes** link to `/project-notes`.

## 4. Locked UI direction

All page concepts were discussed and approved before implementation:

- **Homepage — Career Constellation**: spatial pathway with seeker/employer nodes, trust metrics, growth narrative
- **Services — Placement Pathways**: sequential stage spine with expandable detail panels
- **Jobs — Opportunity Lattice**: sticky filter rail + scannable job cells + no-results state
- **Employers — Hiring Command Surface**: decision-oriented value modules + workflow steps
- **Contact — Direct Line**: form-first layout with office details and location visual

No alternate UI variants remain in the codebase.

## 5. Design system

Centralized in `src/styles.css` under `:root` and `.dark`.

Semantic tokens cover:

- backgrounds, surfaces, foregrounds
- primary / accent / success / destructive
- borders, inputs, rings
- constellation / spine / lattice-specific tokens

Tailwind v4 native token syntax is used (`bg-(--primary)`, `text-(--muted-foreground)`, etc.).

## 6. Color / theme approach

- Light: soft off-white field, deep indigo primary
- Dark: near-black field, luminous primary and higher-contrast borders
- Theme toggle persists via `localStorage` and respects `prefers-color-scheme` on first load
- Components never hard-code theme colors; they use semantic tokens

## 7. Typography

- Inter (Google Fonts) for UI and display
- Clear hierarchy: large tracking-tight headings, readable body, small metadata
- `text-balance` used on key hero lines

## 8. Architecture

Feature-based structure:

```text
src/
├── components/
│   ├── ui/          # primitives (Button)
│   └── shared/      # Header, Footer, AppShell, ThemeToggle
├── features/
│   ├── home/
│   ├── services/
│   ├── jobs/
│   ├── employers/
│   ├── contact/
│   └── project-notes/
├── lib/             # utils, theme
└── routes/          # thin route entry points only
```

Routes only register and render feature pages. Business logic and presentation live inside features.

## 9. Feature structure

Each feature owns its pages, components, types, and data where applicable. Features do not import internal files from other features.

## 10. Shared components

- `Header` — responsive nav + theme toggle + mobile menu
- `Footer` — links + **Project notes**
- `AppShell` — header + main + footer
- `ThemeToggle` — light/dark switch
- `Button` — CVA-based variants

## 11. Job mock data

Located in `src/features/jobs/data/jobs.ts`.

Ten realistic roles with:

- title, company, location
- type, experience level
- salary band (INR)
- remote flag
- tags
- short description
- posted date

TypeScript types in `src/features/jobs/types/job.ts`.

## 12. Job filtering

Client-side only. Filters:

- free-text search (title, company, tags, description)
- job type
- experience level
- remote only
- location substring

Active filter count, result count, and clear-all are shown. No-results state provides a clear reset action.

## 13. Contact form behavior

Frontend-only form with:

- seeker / employer intent toggle
- name, email, phone (optional), message
- validation (required fields + email format + message length)
- submitting loading state
- success state that honestly states no backend delivery occurred
- error feedback on fields

Submission is simulated with a short delay. Logic is isolated so a real API can replace it later.

## 14. Theme system

`ThemeProvider` in `src/lib/theme.tsx` manages:

- `theme` state
- `setTheme` / `toggleTheme`
- `localStorage` persistence
- `document.documentElement.classList` for `.dark`

## 15. Animation and micro-animation

- Subtle pulse on constellation nodes
- Hover scale on pathway nodes and stage indicators
- Filter chip and lattice transitions via CSS
- Respects `prefers-reduced-motion`
- No cursor gimmicks

Inspired by quality of motion on reference sites (reactbits, cali.so, netomi) without copying layouts.

## 16. Responsive strategy

- Mobile-first composition
- Header collapses to hamburger
- Pathway spine stacks on small screens
- Job lattice: 1 → 2 → 3 columns
- Contact: form first, office details below on mobile
- Touch-friendly targets

## 17. Accessibility

- Semantic landmarks and heading order
- Labels on form controls
- Visible focus rings via `:focus-visible`
- ARIA attributes on toggle menu, current stage, form errors
- Color contrast via semantic tokens in both themes
- Keyboard-operable navigation and filters

## 18. Dependencies

Key packages:

- React 19
- TanStack Router / Start
- Tailwind CSS v4 + `@tailwindcss/vite`
- class-variance-authority, clsx, tailwind-merge
- lucide-react
- react-markdown + remark-gfm
- `@netlify/vite-plugin-tanstack-start`

## 19. Local development

```bash
bun install
bun run dev
```

## 20. Production build

```bash
bun run build
bun run preview   # if supported by your Vite/TanStack setup
```

## 21. Netlify deployment

- `@netlify/vite-plugin-tanstack-start` is listed in `devDependencies`
- `vite.config.ts` includes the Netlify plugin
- Deploy via Netlify CLI or Git integration after a successful build

## 22. Known limitations

- No real backend or job API
- Contact form does not send email
- Map is a static Unsplash image, not an interactive map SDK
- Route tree is maintained manually for stability in this environment

## 23. Future backend integration

- Replace `MOCK_JOBS` with API fetch (TanStack Query optional)
- Wire contact form to an endpoint
- Add authentication only if product requirements demand it

## 24. Important implementation decisions

1. One locked creative direction per page — no leftover variants
2. Design tokens centralized; no hard-coded theme colors in TSX
3. Thin routes + feature isolation
4. Honest success messaging for the contact form
5. Functional job filters and empty state
6. Theme toggle that actually switches semantic surfaces
