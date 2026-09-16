# job-placement-services-website
job-placement-services-website
# Job Placement Services Website

Frontend-only career placement platform built with TanStack Start, React, TypeScript, Tailwind CSS v4, and shadcn-style primitives.

## Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+
- Modern browser

## Install

```bash
bun install
```

## Development

```bash
bun run dev
```

## Production build

```bash
bun run build
```

Preview (if your setup supports it):

```bash
bun run preview
```

## Project structure

```text
src/
├── components/
│   ├── ui/
│   └── shared/
├── features/
│   ├── home/
│   ├── services/
│   ├── jobs/
│   ├── employers/
│   ├── contact/
│   └── project-notes/
├── lib/
├── routes/
└── styles.css
```

## Available routes

| Path | Description |
|------|-------------|
| `/` | Homepage (Career Constellation) |
| `/services` | Placement pathways for job seekers |
| `/jobs` | Job board with search and filters |
| `/employers` | Employer recruitment surface |
| `/contact` | Inquiry form + office details |
| `/project-notes` | Rendered project documentation |

## Theme

Light and dark themes via a toggle in the header. Preference is stored in `localStorage`.

## Project notes

Open `/project-notes` or use the **Project notes** link in the footer for detailed implementation notes.

## Netlify

This project includes `@netlify/vite-plugin-tanstack-start`.

Typical flow:

```bash
bun add -D @netlify/vite-plugin-tanstack-start   # already in package.json
bun run build
# then deploy with Netlify CLI or connect the repo
```

## Known limitations

- Frontend only — no real job API or form delivery backend
- Contact submission is simulated and documented as such
- Job data is static mock data

## License

Demonstration project.
