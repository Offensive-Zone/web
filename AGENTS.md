# AGENTS.md

System prompt / persistent instructions for AI coding agents working on this repo. Act as a **senior full-stack developer (Node.js + React)**.

> Note: project is **Vite + React**, not Next.js. There is no server-side rendering, no `app/`/`pages/` router, no API routes — routing/pages are plain React components under `src/page/`. Backend logic lives only in a Cloudflare Worker. Treat this file as authoritative over any generic Next.js assumptions.

## Project overview

Multi-site repo for the **Offensive Zone** ecosystem:

1. **Offensive Zone** (`offensive-zone.com`) — Cybersecurity services company. Bilingual (EN/ES) React landing page with sections (hero, expertise, cyber threats, about us, team, contact form).
2. **Mi Primera Web** (`miprimeraweb.offensive-zone.com`) — Web development services brand. Static HTML site (no React) with its own design system under `redesign/Rediseño sitio Offensive Zone/`.

Both sites share a **single Cloudflare Worker** for the contact form backend.

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
redesign/
  Rediseño sitio Offensive Zone/  # Mi Primera Web static HTML site
    index.html          # Main HTML (uses custom design system components)
    style-2.css         # Brand-specific CSS overrides (flare palette)
    support.js          # dc-runtime component engine
    image-slot.js       # Image placeholder component
    assets/             # Icons, images for miprimeraweb
    _ds/                # Design system (tokens, components)
```

## Commands

```
npm run dev       # vite dev server
npm run build     # vite build -> outDir "build"
npm run preview   # preview production build
```

Worker deploy is separate (Wrangler CLI, from `workers/form-handler/`) — not wired into root `package.json` scripts.

## Contact Form Worker (Multi-Site)

The worker at `workers/form-handler/src/index.js` supports multiple sites via the `source` field in the POST payload:

**Payload shape:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "message": "string (required)",
  "source": "offensive-zone | miprimeraweb (optional, defaults to offensive-zone)"
}
```

**Routing logic:**
- `source === "miprimeraweb"` → sends from `noreply@miprimeraweb.offensive-zone.com` with name "Mi Primera Web"
- Any other value or missing → sends from `sales@offensive-zone.com` with name "Offensive Zone"

**Recipients:** Both sites send to `arreaza.cesara@gmail.com` and `edgardo.krause@gmail.com`.

**Frontend integration:**
- React app (`src/page/home/ContactForm.jsx`): sends `{ name, email, message }` (no `source` field — defaults to offensive-zone)
- Mi Primera Web (`redesign/Rediseño sitio Offensive Zone/index.html`): must send `{ name, email, message, source: "miprimeraweb" }`

## Deployment (Docker build + Cloudflare Pages)

No instalar Node ni npm en el servidor. Usar Docker para build y deploy.

### Build

```bash
docker run --rm -v /home/dev/Projects/web:/app -w /app node:20-alpine sh -c "npm install && npm run build"
```

El build queda en `/home/dev/Projects/web/build/`.

### Deploy a Cloudflare Pages

**Opción A — Subir manualmente desde Cloudflare Dashboard:**
1. Ir a Cloudflare Dashboard → Pages → `offensive-zone`
2. Click "Upload assets" o "Create new deployment"
3. Subir el directorio `build/`

**Opción B — Deploy automático con Wrangler (requiere API token):**
```bash
docker run --rm -v /home/dev/Projects/web:/app -w /app \
  -e CLOUDFLARE_API_TOKEN=tu_token_aqui \
  node:20-alpine sh -c "npm install -g wrangler && wrangler pages deploy build --project-name=offensive-zone"
```

### Archivos estáticos (PDFs, docs)

Los archivos en `public/` se copian tal cual al `build/`. Para compartir documentos públicamente (pero no indexables por buscadores):
1. Colocar el archivo en `public/assets/` (o subcarpeta)
2. **No agregar** la ruta al `robots.txt` (ello la haría descubrible)
3. El archivo queda accesible vía URL directa: `https://offensive-zone.com/assets/archivo.pdf`

### Notas

- El `node_modules` creado por Docker queda como root — limpiar con `sudo rm -rf node_modules` después del build
- No instalar `wrangler` globalmente en el servidor — usar Docker cuando se necesite
- La imagen Docker usada es `node:20-alpine` (ya disponible en el servidor)

## Deployment — Mi Primera Web (Cloudflare Pages)

Sitio estático HTML (no React/Vite). Deploy directo de archivos estáticos.

### Build (no necesita build step)

El sitio ya es HTML/CSS/JS puro. No necesita compilación.

### Deploy a Cloudflare Pages

**Opción A — Subir manualmente desde Cloudflare Dashboard:**
1. Ir a Cloudflare Dashboard → Pages → Crear proyecto → `miprimeraweb`
2. Click "Upload assets"
3. Subir el directorio `redesign/Rediseño sitio Offensive Zone/` (incluye index.html, assets/, _ds/, etc.)

**Opción B — Deploy automático con Wrangler:**
```bash
docker run --rm -v /home/dev/Projects/web:/app -w /app \
  -e CLOUDFLARE_API_TOKEN=tu_token_aqui \
  node:20-alpine sh -c "npm install -g wrangler && wrangler pages deploy 'redesign/Rediseño sitio Offensive Zone' --project-name=miprimeraweb"
```

### Notas miprimeraweb

- El sitio usa un design system custom (`_ds/`) que se carga vía `<link>` y `<script>` tags
- El formulario debe enviar `{ name, email, message, source: "miprimeraweb" }` al worker
- Worker URL: `https://offensive-zone-form-handler.camaguapa.workers.dev`
- No hay build step — es HTML estático con componentes renderizados en client-side via `support.js`
- Script de deploy: `./deploy-miprimeraweb.sh <CLOUDFLARE_API_TOKEN>`

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
