# SHAED Landing Page

Marketing and information site for [SHAED](https://shaed.ai) — the commercial vehicle procurement platform that connects fleets, dealers, upfitters, and OEMs in a single workflow.

## Tech Stack

- **Framework** — React 18 + TypeScript
- **Build** — Vite
- **Styling** — Tailwind CSS (custom theme tokens: `navy`, `teal`, `off-white`)
- **Routing** — React Router v7
- **Icons** — Lucide React

## Getting Started

```bash
npm install
npm run dev
```

### Environment Variables

None required. The site is fully static; all content lives in `src/data/`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript type check (no emit) |

## Project Structure

```
src/
  components/       UI components (Navbar, Hero, Footer, etc.)
    legal/          Legal page sub-components (Terms, Privacy)
  context/          React context providers (Theme)
  hooks/            Custom hooks (useInView)
  data/             Site content (team roster, news articles)
  lib/              Small helpers (contact mailto, toast)
  pages/            Route-level page components
public/             Static assets (logos, team photos, PDFs)
```

## Routes

| Path | Page |
|---|---|
| `/` | Home (landing page with all sections) |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |
| `/news` | News listing |
| `/news/:slug` | News article |

## Content

The team roster and news articles are plain TypeScript in `src/data/`. Edit those files and redeploy to update the site.

The contact form and newsletter signup open the visitor's email client addressed to the address in `src/lib/contact.ts`.

## Deployment (Vercel)

1. Import the repository in [Vercel](https://vercel.com/new).
2. Vercel auto-detects the **Vite** framework preset — no manual override needed.
3. Deploy. No environment variables are needed. The `vercel.json` rewrite rule handles client-side routing so direct links to `/terms` and `/privacy` work correctly.
