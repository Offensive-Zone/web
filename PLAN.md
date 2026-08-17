# PLAN.md — Rediseño offensive-zone.com

Fuente: sesión externa de Claude (share link no accesible por JS-render; contenido pegado manualmente por el usuario).

## Estado actual detectado

- Sitio en producción (offensive-zone.com) es SPA renderizada por JS (bundle `index-BJxnUUD8.js` + `index-CC66ZWVM.css`), coincide con este repo (Vite + React, ver `AGENTS.md`).
- No tiene Open Graph tags → previews en redes salen en blanco.
- Facebook Pixel ya instalado (`fbevents.js`, id `400663139734926`).

## Redesign propuesto (hecho en otra sesión, standalone HTML/CSS/JS — sin build)

Entregable: `index.html` + `style.css` + `script.js` sueltos (no integrado a este repo React todavía). **Pendiente decidir**: portar ese contenido/diseño a los componentes React existentes (`src/page/home/*`) o reemplazar el proyecto por el estático.

### Dirección de diseño
- Concepto "zona/mapa táctico" (no el cliché hacker verde/negro ni cream/terracota).
- Logo (banderín) como elemento de firma — se "planta" en el hero y reaparece en footer.
- Paleta: grafito-navy + acento naranja señal `#FF5A29` + verde "verificado" `#33D2A0` (solo estados de confirmación).
- Tipografía: Space Grotesk (display) + IBM Plex Sans (cuerpo) + IBM Plex Mono (labels tipo `SECTOR_00`, coordenadas, formulario).

### Copy
Extraído 1:1 del bundle JS actual — hero, "Nosotros", 4 servicios, "por qué elegirnos", mensajes de formulario, dirección, redes. Nada inventado ahí.

### Secciones nuevas agregadas
- Pentesting & Red Team (servicio explícito, faltaba)
- Auditoría de Seguridad en la Nube (servicio)
- Metodología: 4 fases — Recon → Explotación → Remediación → Verificación
- Franja de confianza/sectores + badges de cumplimiento (ISO 27001, SOC 2, OWASP)
- Testimonio con placeholder para cita de cliente real
- Meta tags OG/description reales para compartir en LinkedIn etc.

### Placeholders dejados
- `.id-photo` en el hero: tarjeta tipo "ID card" con marco punteado, foto del usuario (Edgardo) va ahí.
- Segunda imagen placeholder en "Nosotros" (equipo/oficina).
- `TODO: backend` en `script.js` — formulario solo simula envío, falta conectar a backend real.

## Archivos recibidos (en `redesign/`)

- [x] `index.html` — 362 líneas, todas las secciones descritas abajo confirmadas presentes
- [x] `style.css`
- [x] `script.js`
- [x] `logo-white.png`
- [ ] Foto del usuario para reemplazar `.id-photo` (placeholder en hero, línea ~79)

### Verificación del contenido de `index.html`
- Nav + hero (`SECTOR_00`) con radar SVG y stats (6 líneas de servicio / 24h respuesta / 100% confidencial)
- Trust strip: sectores (Fintech, SaaS, E-commerce, Salud, Manufactura + placeholder "tu logo aquí")
- About (`SECTOR_01`) con placeholder de imagen de equipo/oficina
- Services (`SECTOR_02`): 6 tarjetas — Pentesting & Red Team y Auditoría Cloud marcadas `new-service`, más Software Seguro, IA, ISO/SOC2, Concientización
- Metodología (`SECTOR_03`): 4 fases (Recon/Explotación/Remediación/Verificación)
- Why us (`SECTOR_04`) + badges de compliance (ISO 27001, SOC 2, OWASP, + placeholder de certificación)
- Testimonio (`SECTOR_05`): placeholder completo (cita, nombre, cargo, empresa)
- Contacto (`SECTOR_06`): form (name/email/message) + info (dirección Calle 143 Bucaramanga, correo placeholder, LinkedIn/Instagram)
- Footer CTA + footer con links de nav

Todo coincide con el resumen de la sesión externa — nada roto ni faltante a simple vista.

## Pendientes antes de publicar (según la otra sesión)

1. Conectar formulario de contacto a backend real — este repo ya tiene uno: Cloudflare Worker en `workers/form-handler/` (ver `AGENTS.md`). Reusar ese en vez de Formspree/EmailJS si se integra al proyecto React.
2. Confirmar correo real de contacto (placeholder actual: `contacto@offensive-zone.com`).
3. Reemplazar logos de "sectores" por clientes reales o quitar la franja si no hay clientes para mostrar.

## Estado actual (2026-08-17)

### Sitios en el repo

1. **Offensive Zone** (`offensive-zone.com`) — React + Vite, en producción
2. **Mi Primera Web** (`miprimeraweb.offensive-zone.com`) — HTML estático en `redesign/Rediseño sitio Offensive Zone/`

### Worker multi-sitio

El worker en `workers/form-handler/src/index.js` ya soporta ambos sitios:
- `source: "miprimeraweb"` → envía desde `noreply@miprimeraweb.offensive-zone.com`
- Default → envía desde `sales@offensive-zone.com`

### Pendiente deploy miprimeraweb

1. Crear proyecto `miprimeraweb` en Cloudflare Dashboard → Pages
2. Ejecutar: `./deploy-miprimeraweb.sh <CLOUDFLARE_API_TOKEN>`
3. Configurar custom domain `miprimeraweb.offensive-zone.com` (opcional)

### Decisión tomada

El rediseño de miprimeraweb se deployó como sitio estático HTML separado (no se integró al proyecto React de offensive-zone.com). Cada sitio tiene su propio proyecto en Cloudflare Pages.
