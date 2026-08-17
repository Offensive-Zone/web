# Offensive Zone — Design System

> **Protegiendo tu mundo digital** — *Protecting your digital world.*
> Offensive‑security brand: penetration testing, red teaming, staff augmentation and
> cybersecurity consulting. We defend businesses by thinking like an attacker.

This repository is the single source of truth for the Offensive Zone visual + verbal
identity: design tokens, fonts, brand assets, reusable UI components, and full‑screen
product recreations. A compiler bundles the components and indexes the tokens; consumers
link one file — `styles.css`.

---

## 1. Company & product context

**Offensive Zone** (a.k.a. *theoffensivezone* / `www.theoffensivezone.com`) is a
cybersecurity firm specialising in **offensive security** — simulating real attacks
*before* the attackers do. Founder/lead: **Edgardo Krause**, ethical hacker / OffSec
professional. The brand is **Spanish‑first** (Latin‑American Spanish, some Argentine
*voseo*) with English used for international proposals.

**Positioning line:** *"Defendemos tu negocio pensando como un atacante."*
**Core promise:** *"Simulamos el ataque antes que el atacante."*

### Services
- **Penetration Testing** — apps, networks, cloud (OWASP Top 10, external/internal).
- **Red Teaming** — simulated real‑world attacks, social engineering.
- **Staff Augmentation** — embed security specialists into a client team.
- **Compliance consulting** — GDPR, ISO 27001, NIST.
- **Training / capacitación** — internal security upskilling.

### Pentest packages (reference pricing, €)
| Option | Price | Scope |
|---|---|---|
| #1 | €5,000 | up to 5 applications + external network test (10 IPs) |
| #2 | €4,000 | up to 3 applications |
| #3 | €3,000 | 1 application |

Certifications referenced: **OSCP, CEH, CISSP**. Values: **Respeto, Confidencialidad,
Profesionalismo y calidad, Honestidad.**

### Source materials (provided — reader may not have access)
- Local folder `Designs/` (mounted): pitch decks, IG feed templates, proposal & budget
  templates, a pentest‑packages PDF, brand imagery.
  - `Editables/Offensive_Zone_PitchDeck.pptx` — 15‑slide investor pitch (EN/ES).
  - `Editables/Protegiendo tu mundo digital.pptx` — 13‑slide company brochure deck (logos + icons embedded → extracted to `assets/`).
  - `Editables/Templates Español/` — proposals, budgets, NDA, packages templates.
  - `Editables/Feed IG/`, `9_3 PP/`, `Imagenes pp/` — social graphics.
  - `Paquetes de Pentest.pdf` — pentest packages one‑pager.
- No website or app codebase was provided — the **Website UI kit is an extrapolation**
  built strictly from this brand's visual language + real deck copy (flagged in that kit).

---

## 2. Content fundamentals — how Offensive Zone writes

**Language:** Spanish primary; English for international proposals. Keep the chosen
language consistent within a surface.

**Voice:** confident, proactive, slightly *offensive* (in the security sense) — the
attacker's mindset turned to the client's advantage. Authoritative but human; never
fear‑mongering for its own sake — fear is named, then **neutralised** with capability.

**Tone & devices**
- **Anticipation over reaction:** *"Donde otros reaccionan, nosotros nos adelantamos."*,
  *"La mejor defensa es anticiparse."*, *"Porque los atacantes no esperan y nosotros tampoco."*
- **Short, declarative punches** for headlines; longer, methodical, technical prose in
  proposals (methodology, deliverables, conditions).
- **"Blindar" (to armor/shield)** is a signature verb: *"blindamos tu negocio"*,
  *"blindamos tu marca"*.
- **Numbered method** framing: *"Enfoque de Pentest en 6 pasos"*, *"01 / 02 / 03"*.
- **Address the reader as "tú/vos"** ("tu negocio", "tu mundo digital", Argentine
  "el respaldo que necesitás"). First‑person plural for the company ("nosotros",
  "simulamos", "detectamos").

**Casing:** Headlines and the wordmark are **UPPERCASE**. Eyebrows/labels are uppercase
with wide letter‑spacing (the tagline `PROTEGIENDO TU MUNDO DIGITAL` is the canonical
example). Body is sentence case.

**Emoji:** generally avoided in formal collateral. The founder's personal/teaching decks
use them sparingly (🏆, 📧, 🌐 in contact lines) — **do not** use decorative emoji in
product or marketing UI; a contact‑line 📧/🌐 is the only sanctioned use, and prefer real
icons even there.

**Example copy bank**
- *"No solo protegemos sistemas, protegemos lo más valioso de tu negocio: su futuro."*
- *"En un mundo hiperconectado, blindamos tu negocio: detectamos, anticipamos y
  neutralizamos amenazas con la precisión de nuestros hackers éticos."*
- *"Offensive Zone, seguridad sin puntos ciegos."*
- *"Descubre cuán vulnerable es tu empresa antes que lo hagan los hackers."*
- CTA pattern: *"¿Listo para el siguiente nivel de seguridad? Contáctanos hoy."*

---

## 3. Visual foundations

**Mood:** dark, technical, premium. A near‑black navy command‑center canvas lit by
electric‑azure energy — shields, keyholes, hex mesh, particle waves, circuitry.

**Color**
- **Canvas:** deep navy → black. `--oz-navy-900 #091538` is the primary dark; gradients
  resolve toward `--oz-black #05070d`. Most surfaces are dark; light/white surfaces are
  rare (used for documents/proposals).
- **Primary accent:** **electric azure `#0096ff`** — chevrons, CTAs, icon fills, links,
  glows. Used sparingly as energy, not as fill area.
- **Secondary:** **sky `#56b6ce`** — the four‑point star mark's color; supporting accents.
- **Deep brand blues** (`#012e8a`, `#0a4da0`, `#0f5ca1`) build gradients and the signature
  **"stadium" pill blob** (`--oz-grad-pill`) and **edge gradient** (blue→black, `--oz-grad-edge`).
- **Severity scale** (product‑critical for pentest reports): Critical `#ff3b47`,
  High `#ff7a29`, Medium `#ffc53d`, Low `#2ea8ff`, Info `#8fa3c4`, plus Secure `#22c9a0`.

**Type** — Display **Saira** (extrabold geometric grotesque, UPPERCASE titles, tight
tracking), UI **IBM Plex Sans**, code/data **IBM Plex Mono**. *(Substitutes for the
unsupplied brand wordmark font — see `tokens/fonts.css`.)* Eyebrows are uppercase Plex
Sans with `0.18em` tracking.

**Backgrounds & imagery**
- Full‑bleed **dark photographic/3D imagery**: glowing shields with keyholes, neon
  padlocks, circuit boards, code overlays, particle‑wave meshes, hex grids.
- **Color vibe of imagery:** cool, blue‑dominant, high‑contrast glow on black. Occasional
  magenta/multicolor data‑stream accents (used as an *attacker/threat* signal, not brand).
- **Decorative motifs:** the **quad chevron `»»»`** (forward momentum — see
  `assets/brand/`), the **four‑point star** mark, hex/honeycomb tessellation, thin glowing
  rings/arcs, and the **rounded "stadium" capsule** (glass bars, list rows, the blue blob).

**Shape & surface**
- **Corner radius:** generous. Capsules/chips are fully rounded (`--r-pill`); cards and
  panels `--r-xl 24px`; controls `--r-md 12px`. Sharp corners only on full‑bleed media.
- **Cards:** dark glass — `--surface-1 #0a1838` fill, 1px hairline border
  (`--border-subtle`), `--shadow-card`. Featured cards add an azure border + `--glow-azure`.
- **Borders:** hairline cool‑blue at low alpha on dark; accent borders are azure at ~55%.
- **Glass / blur:** translucent navy panels with `backdrop-filter: blur` for overlay bars
  and capsules (as in the deck's stacked glass rows).

**Glow & shadow system**
- Outer **azure glow** marks "active/energised" elements (CTAs, the shield, key icons):
  `--glow-azure` / `--glow-azure-strong`. Inset glow (`--glow-inset`) for hero panels.
- Depth shadows are soft, large, and very dark (near‑black) — `--shadow-card`.

**Motion** — calm and precise, never bouncy. Fades + short upward slides on a smooth
`--ease-out` (≈240ms). Subtle glow pulse on the shield/star is acceptable; avoid playful
overshoot. Respect `prefers-reduced-motion`.

**Interaction states**
- **Hover:** lighten accent to `--accent-hover #2ea8ff` and/or intensify glow; surfaces
  raise to `--surface-2`. Links brighten + underline.
- **Press:** deepen to `--accent-press #0a73c4` and scale down ~2% (0.98).
- **Focus:** `--ring-focus` (3px azure halo). Never remove focus outlines.
- **Disabled:** `--text-disabled`, reduced opacity, no glow.

**Layout rules** — wide, breathing dark sections (`--section-y 96px`), `1200px` container,
24px gutters. Content often **right/left‑weighted** with a large dark negative space and
one glowing focal image (shield/laptop). Eyebrow → big UPPERCASE title → body → CTA is the
canonical vertical rhythm.

---

## 4. Iconography

- **Feature/marketing icons:** solid, single‑weight, **azure `#0096ff`** glyphs on dark —
  rounded, friendly‑geometric (gear‑with‑check process cycle, lock + password,
  devices‑secured, verified badge, training/people). The brand's own set was extracted
  from the company deck → **`assets/icons/`** (PNG, transparent). Prefer these for
  on‑brand feature rows.
- **UI icons (controls, nav, app chrome):** use **Lucide** (CDN) — a clean 1.75–2px stroke
  set that matches the brand's geometric, security‑neutral feel. *(Substitution: no UI icon
  set was supplied; Lucide is the closest stroke/style match — flagged.)* Load:
  `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
- **The chevron `»»»`** is a brand *motif*, not an icon — available as PNG
  (`assets/brand/chevron-*.png`) and as the CSS helper `.oz-chevrons`.
- **The four‑point star** is the logo mark — `assets/logo/star-mark.png`; never redraw it.
- **Severity** is communicated by color + a label/dot, optionally a Lucide
  `shield-alert` / `triangle-alert`.
- **Emoji as icons:** avoid (see Content Fundamentals).

---

## 5. Repository index / manifest

```
styles.css                  ← consumers link THIS (import manifest only)
tokens/
  fonts.css                 Google‑Fonts substitutes (Saira / IBM Plex Sans / Mono)
  colors.css                base scale + semantic aliases + severity + gradients
  typography.css            families, weights, type scale, tracking
  spacing.css               4px grid, layout, control sizing
  effects.css               radii, borders, shadows, glow, blur, motion
  base.css                  resets + brand utilities (.oz-display/.oz-overline/.oz-chevrons)
guidelines/                 foundation specimen cards (Design System tab)
components/core/            reusable React primitives (.jsx + .d.ts + .prompt.md + card)
ui_kits/
  website/                  marketing site recreation (theoffensivezone.com)  [extrapolated]
  slides/                   pitch‑deck / proposal slide templates
assets/
  logo/    star-mark, horizontal lockup, full lockup + tagline
  brand/   chevron motif (solid / outline)
  icons/   extracted feature icons (process, lock, devices, verified, training)
  imagery/ hero shields, neon laptop, circuit, data‑streams, chevron‑wave bg
readme.md                   this file
SKILL.md                    Agent‑Skills front‑matter for portable use
```

### Components (see `components/core/`)
`Button`, `IconButton`, `Badge`, `SeverityBadge`, `Tag`, `Card`, `Input`, `Eyebrow`,
`Chevrons`, `Logo`, `Stat` — each with a `.d.ts` contract, a `.prompt.md` usage note, and
a `@dsCard` specimen.

### UI kits
- **Website** (`ui_kits/website/index.html`) — hero, services, why‑us, packages/pricing,
  CTA, footer; interactive nav.
- **Slides** (`ui_kits/slides/index.html`) — Title/Cover, Bulleted statement, 6‑step
  process, Services grid, Pricing packages, Big quote, Contact — at 1280×720.

---

## 6. Quick start (consumers)

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, SeverityBadge, Logo } = window.OffensiveZoneDesignSystem_04bc17;
</script>
```

Design with the **semantic** tokens (`--text-body`, `--surface-1`, `--accent`), reserve
azure for energy, keep the canvas dark, and lead with the attacker's‑advantage voice.
