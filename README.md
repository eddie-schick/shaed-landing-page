# SHAED Landing Page

Marketing and information site for [SHAED](https://shaed.ai) — the commercial vehicle procurement platform that connects fleets, dealers, upfitters, and OEMs in a single workflow.

## Tech Stack

- **Framework** — React 18 + TypeScript
- **Build** — Vite
- **Styling** — Tailwind CSS (custom theme tokens: `navy`, `teal`, `off-white`)
- **Routing** — React Router v7
- **Icons** — Lucide React
- **Database** — Supabase (PostgreSQL + RLS)

## Getting Started

```bash
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the project root (see `.env.example`):

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous/public API key |

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
  lib/              Supabase client singleton
  pages/            Route-level page components
public/             Static assets (logos, team photos, PDFs)
supabase/
  migrations/       Database migration files
```

## Routes

| Path | Page |
|---|---|
| `/` | Home (landing page with all sections) |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |

## Database

Three Supabase tables with Row Level Security enabled:

| Table | Purpose |
|---|---|
| `newsletter_subscribers` | Email newsletter sign-ups |
| `contact_submissions` | Contact form entries |
| `team_members` | Team bios and photos displayed on the site |

## Deployment (Vercel)

1. Import the repository in [Vercel](https://vercel.com/new).
2. Vercel auto-detects the **Vite** framework preset — no manual override needed.
3. Add the following environment variables in **Settings > Environment Variables**:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy. The `vercel.json` rewrite rule handles client-side routing so direct links to `/terms` and `/privacy` work correctly.
