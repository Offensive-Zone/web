# AGENTS.md

System prompt / persistent instructions for AI coding agents working on this repo. Act as a **senior full-stack developer (Node.js + React)**.

> Note: project is **Vite + React**, not Next.js. There is no server-side rendering, no `app/`/`pages/` router, no API routes — routing/pages are plain React components under `src/page/`. Backend logic lives only in a Cloudflare Worker. Treat this file as authoritative over any generic Next.js assumptions.

## Project overview

Marketing site for **Offensive Zone** (offensive-zone.com), a cybersecurity services company. Bilingual (EN/ES) landing page with sections (hero, expertise, cyber threats, about us, team, contact form) plus a serverless contact-form backend.

## Stack

- **Frontend**: React 18, Vite 6 (`@vitejs/plugin-react`), MUI 5 (`@mui/material`, `@emotion`)
- **i18n**: `i18next` + `react-i18next` + `i18next-browser-languagedetector`, resources in `src/translations/{en,es}/global.json`
- **Motion/UI**: `framer-motion`, `swiper`, `@tsparticles/*`
- **Analytics**: GA4 injected manually in `src/index.jsx` (measurement id hardcoded there)
- **Backend**: single Cloudflare Worker (`workers/form-handler`, Node-style `fetch` handler) that relays the contact form to Cloudflare Email Routing/Send API. No other backend/API.
- **No test runner configured** despite `@testing-library/*` deps being present — don't assume `npm test` works without checking first.

## Structure

```
src/
  App.jsx              # ThemeProvider + Layout root
  index.jsx            # ReactDOM root, i18n provider, GA injection
  page/
    layout.jsx         # top-level layout wrapper
    home/               # section components (hero, expertise, aboutus, team, cyberThreats, slider, whyChooseUs, ContactForm, index)
  components/
    cards/, layout/ (navBar, footer), particles/, subtittle/, transitions/
  theme/theme.jsx        # MUI theme
  translations/{en,es}/global.json
workers/form-handler/
  src/index.js          # Cloudflare Worker: POST /  -> sends email via CF Email API
  wrangler.toml         # worker config, expects env.ACCOUNT_ID / env.CF_TOKEN (Cloudflare secrets)
```

## Commands

```
npm run dev       # vite dev server
npm run build     # vite build -> outDir "build"
npm run preview   # preview production build
```

Worker deploy is separate (Wrangler CLI, from `workers/form-handler/`) — not wired into root `package.json` scripts.

## Conventions to follow

- Functional components, hooks only, no class components.
- MUI `sx` prop / theme for styling; no CSS-in-JS libs beyond emotion (already MUI's dependency), keep `src/index.css` minimal/global-only.
- All user-facing copy goes through i18next — add new strings to **both** `en/global.json` and `es/global.json`, never hardcode text in components.
- Keep components under `src/page/home/` focused on one section each; shared/reusable pieces go in `src/components/`.
- Worker responses always set CORS headers (`Access-Control-Allow-Origin: *`) and a JSON content-type — match the existing error/response shape in `workers/form-handler/src/index.js` rather than inventing a new one.
- Secrets (`ACCOUNT_ID`, `CF_TOKEN`) are Wrangler secrets/env vars — never hardcode or commit them.

## Working agreement

- Read the relevant existing component before editing; match its patterns (functional style, i18next usage, MUI theme tokens) instead of introducing new libraries or patterns.
- Don't add a state-management library, router, or SSR — out of scope for this static marketing site unless explicitly requested.
- Don't add tests/config for a runner that isn't set up without asking first (deps exist but no jest/vitest config present as of this writing — verify before relying on it).
- When touching the contact form or worker, verify both sides stay in sync (payload shape, error format).
- Prefer minimal diffs; this is a small, mostly-static site — avoid premature abstraction.
