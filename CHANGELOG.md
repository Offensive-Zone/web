# Changelog

## [0.2.0] - 2026-05-21

### Added
- Hero section with tsParticles animated background (EN/ES)
- Expertise section: 3 service cards (Penetration Testing, Web PT, Security Consultation)
- CyberThreats section with full-bleed background image
- About Us section (Vision, Mission, Values)
- Why Choose Us section with 4 value cards
- Typeform contact form embed
- NavBar with responsive mobile menu, social links (LinkedIn, Instagram, Email), language selector
- Footer with contact info (email, address, phone)
- Team section (commented out) with 3 member cards (Edgardo, Mateo, Cesar)
- Slider/client carousel (commented out) using Swiper

### Changed (v0.1.0 → v0.2.0)
- **Hero subtitle** updated with new AI + security messaging (EN/ES)
- **Expertise section** replaced: 3 old cards → 5 new Core Services (Security Awareness, AI Implementation, Secure Software Development, ISO 27001/SOC 2, SSDLC) each with icon, description, and tagline
- **About Us section** replaced: new "Why Offensive Zone?" differentiation text
- **Footer** added CTA section "Ready to secure your zone?"
- **NavBar** menu item "EXPERTISE" → "SERVICES" / "SERVICIOS"
- **Contact form** replaced Typeform embed with custom React form (cyberpunk dark style), bilingual (EN/ES), sends to `sales@offensive-zone.com`
- **Card layout** changed from fixed-width flex to responsive CSS grid → flexbox with centered alignment
- **i18next** debug mode disabled (`debug: false`)
- Responsive grid for 5 service cards: 5 cols (xl) / 3 cols (lg) / 2 cols (md) / 1 col (xs)

### Infrastructure
- **Worker** (`offensive-zone-form-handler`) deployed to handle form submissions
- **Cloudflare Email Routing** enabled for `offensive-zone.com`
- **Email rule** `sales@offensive-zone.com` → forwards to `arreaza.cesara@gmail.com` + `edgardo.krause@gmail.com`
- **Email Sending API** integrated in Worker for form-to-email delivery

### Removed
- Typeform embed (`TypeFormEmbed.jsx`) — replaced by custom ContactForm
- Old 3-card expertise structure

### i18n
- Full bilingual support: English (`en`) and Spanish (`es`)
- 70+ translation keys per language
- Auto-detection via `i18next-browser-languagedetector`
- Manual language switching in NavBar with flag icons

### Analytics
- Google Analytics v4 (`G-DV8V4S03Y2`)
- Facebook Pixel (`400663139734926`)

### Tech Stack
- **Frontend:** React 18, Vite, MUI v5, Emotion, Framer Motion
- **i18n:** i18next, react-i18next
- **Animation:** tsParticles (particle background), Framer Motion (scroll transitions)
- **Tooling:** Vite, Cloudflare Pages, Wrangler
- **Email:** Cloudflare Email Routing, Email Sending API, MailChannels

### Deployment
- Build: `npm run build` → `build/`
- Deploy: `wrangler pages deploy build/ --project-name="offensive-zone"`

---

## [Unreleased]

### Added (2026-08-17)
- **Mi Primera Web** (`miprimeraweb.offensive-zone.com`): sitio estático HTML en `redesign/Rediseño sitio Offensive Zone/`
  - Design system custom (`_ds/`) con paleta "Flare" (naranja)
  - Secciones: Hero, Nosotros, Servicios (10), Trabajos (portfolio), Testimonios, Planes (3), Contacto, Footer
  - Formulario de contacto conectado al worker con `source: "miprimeraweb"`
  - Script de deploy: `./deploy-miprimeraweb.sh <CLOUDFLARE_API_TOKEN>`

### Changed
- **Worker multi-sitio**: `workers/form-handler/src/index.js` ahora soporta múltiples sitios via campo `source` en el payload
  - `source === "miprimeraweb"` → envía desde `noreply@miprimeraweb.offensive-zone.com`
  - Default (sin source o cualquier otro valor) → envía desde `sales@offensive-zone.com` (offensive-zone.com)
  - Ambos sitios envían a los mismos destinatarios: `arreaza.cesara@gmail.com` + `edgardo.krause@gmail.com`

### Documentation
- AGENTS.md actualizado con sección "Contact Form Worker (Multi-Site)"
- AGENTS.md actualizado con sección "Deployment — Mi Primera Web"
- PLAN.md actualizado con estado del rediseño
- ESTADO-ACTUAL.md creado como resumen rápido para retomar trabajo

### Infrastructure
- miprimeraweb desplegado en Cloudflare Pages (https://miprimeraweb.pages.dev)
- Custom domain miprimeraweb.offensive-zone.com configurado
- Cloudflare Email Obfuscation deshabilitado para mostrar datos de contacto
- Script deploy-miprimeraweb.sh creado para deploy automatizado

### Planned
- Deploy miprimeraweb a Cloudflare Pages (proyecto separado)
- Configurar custom domain `miprimeraweb.offensive-zone.com`
- Enable Team section (offensive-zone.com)
- Enable Slider/client carousel (offensive-zone.com)
- Populate `src/common/data.js`

---

## Historial de cambios / Change History

### Añadido (v0.1.0)
- Sección Hero con fondo animado de tsParticles (EN/ES)
- Sección de Expertise: 3 tarjetas de servicios (Pentesting, Web PT, Consultoría)
- Sección CyberThreats con imagen de fondo de ancho completo
- Sección Sobre Nosotros (Visión, Misión, Valores)
- Sección Por Qué Elegirnos con 4 tarjetas de valor
- Formulario de contacto embebido de Typeform
- NavBar responsive con menú móvil, redes sociales y selector de idioma
- Footer con información de contacto
- Sección de Equipo (comentada) con 3 tarjetas de miembros
- Slider/carrusel de clientes (comentado) usando Swiper

### Cambios (v0.1.0 → v0.2.0)
- **Hero subtitle** actualizado con nuevo mensaje de IA + seguridad (EN/ES)
- **Sección Expertise** reemplazada: 3 cards antiguas → 5 nuevos servicios (Security Awareness, AI Implementation, Secure Software Development, ISO 27001/SOC 2, SSDLC) con ícono, descripción y tagline
- **Sección About Us** reemplazada: nuevo texto diferencial "Why Offensive Zone?"
- **Footer** agregada sección CTA "Ready to secure your zone?"
- **NavBar** "EXPERTISE" → "SERVICES" / "SERVICIOS"
- **Formulario de contacto** reemplazado Typeform por formulario React custom (estilo cyberpunk dark), bilingüe (EN/ES), envía a `sales@offensive-zone.com`
- **Cards** cambiado de flexbox con ancho fijo a grid responsive → flexbox centrado
- **i18next** debug desactivado (`debug: false`)
- Grid responsive para 5 cards: 5 cols (xl) / 3 cols (lg) / 2 cols (md) / 1 col (xs)

### Infraestructura
- **Worker** (`offensive-zone-form-handler`) desplegado para manejar envíos del formulario
- **Cloudflare Email Routing** activado para `offensive-zone.com`
- **Regla de correo** `sales@offensive-zone.com` → reenvía a `arreaza.cesara@gmail.com` + `edgardo.krause@gmail.com`
- **API Email Sending** integrada en Worker para entrega de correos del formulario

### Eliminado
- Typeform embed (`TypeFormEmbed.jsx`) — reemplazado por ContactForm custom
- Estructura antigua de 3 cards de expertise

### i18n / Internacionalización
- Soporte bilingüe completo: inglés (`en`) y español (`es`)
- 70+ claves de traducción por idioma
- Detección automática mediante `i18next-browser-languagedetector`
- Cambio manual de idioma en NavBar con banderas

### Analytics / Analítica
- Google Analytics v4 (`G-DV8V4S03Y2`)
- Facebook Pixel (`400663139734926`)

### Stack Tecnológico / Tech Stack
- **Frontend:** React 18, Vite, MUI v5, Emotion, Framer Motion
- **Internacionalización:** i18next, react-i18next
- **Animaciones:** tsParticles (fondo de partículas), Framer Motion (transiciones)
- **Herramientas:** Vite, Cloudflare Pages, Wrangler
- **Email:** Cloudflare Email Routing, Email Sending API, MailChannels

### Despliegue / Deploy
- Construcción: `npm run build` → `build/`
- Publicación: `wrangler pages deploy build/ --project-name="offensive-zone"`

### Próximamente / Upcoming
- Habilitar sección de Equipo
- Habilitar Slider/Carrusel de clientes
- Poblar `src/common/data.js`
