# d1se0 // Portfolio — React + Node.js

Portfolio profesional de **Adrián García López (d1se0)** — Ethical Hacker / Bug Bounty
Hunter — migrado desde el HTML estático original a **React (Vite) + Tailwind CSS**,
con un servidor **Node.js/Express** opcional para autoalojarlo.

Diseño "hacker glass": glassmorphism, blur, acentos terminal (verde/cian sobre
fondo casi negro), tipografía monoespaciada (JetBrains Mono) + Sora, animaciones
con `framer-motion`, y una pieza central: un **mapa de topología de red interactivo**
con cables animados (pulsos de luz viajando en tiempo real) de tu infraestructura
real — Oracle Cloud como nodo central en la nube (servidor WireGuard), con
Proxmox VE y Raspberry Pi 4 como spokes conectados. Cada servicio es clicable
y abre una ficha técnica detallada (stack, arquitectura, highlights).

Incluye también: badge en vivo de HackTheBox (actualizado automáticamente por
HTB, sin necesidad de API key), tarjeta de DockerLabs, CVE-2026-19871
destacado, y un listado de bug bounty paginado ("ver más") filtrable por
severidad.

## Estructura

```
portfolio/
├── src/
│   ├── data/content.js       ← TODO el contenido (perfil, CVE, bug bounty, homelab...)
│   ├── components/           ← Hero, About, Skills, BugBounty, Homelab, etc.
│   ├── App.jsx
│   └── index.css
├── server/index.js           ← Servidor Express opcional (para autoalojar)
├── public/                   ← favicon
└── dist/                     ← se genera con `npm run build`
```

## Editar tu contenido

Todo el texto (experiencia, skills, hallazgos de bug bounty, servicios del
homelab, proyectos...) vive en **`src/data/content.js`**. No hace falta tocar
ningún componente para actualizar datos: añade/edita objetos en ese fichero.

Las fichas técnicas detalladas de cada servicio (las que se abren al hacer
clic sobre un servicio en la sección Homelab) están en el objeto
`serviceDetails` del mismo fichero, indexadas por el nombre exacto del
servicio tal y como aparece en `homelab.hub.services` / `homelab.spokes[].services`
/ `homelab.spokes[].lxc`.

> ⚠️ **Nota sobre bug bounty**: por responsabilidad en la divulgación, el
> listado público solo muestra tipo de vulnerabilidad, severidad y estado —
> nunca PoCs, endpoints reales ni payloads, especialmente en programas que
> siguen pendientes de resolución. Si quieres añadir un hallazgo nuevo, sigue
> ese mismo criterio en `bugBounty` dentro de `content.js`.

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:5173 con hot-reload
```

## Build de producción

```bash
npm run build       # genera /dist
npm run preview     # sirve /dist en local para comprobarlo
```

## Despliegue en GitHub Pages

`vite.config.js` ya tiene `base: '/PaginaCV/'` configurado para publicarse en
`h4ck3nd.github.io/PaginaCV`. Si cambias el nombre del repo, actualiza ese valor.

### Opción A — GitHub Actions (recomendada, despliegue automático)

Ya incluye el workflow `.github/workflows/deploy.yml`: cada `git push` a
`v2` construye y publica solo.

1. Sustituye el contenido de tu repo `PaginaCV` por este proyecto (conservando
   la carpeta `.git`):
   ```bash
   cd tu-repo-PaginaCV
   git rm -rf .          # borra el HTML antiguo del repo (no el historial)
   # copia aquí dentro TODOS los archivos de este zip, incluida .github/
   git add .
   git commit -m "Migración a React + Vite + Node"
   git push origin v2
   ```
2. En GitHub → tu repo → **Settings → Pages → Build and deployment → Source**:
   selecciona **GitHub Actions** (no "Deploy from a branch").
3. Ve a la pestaña **Actions** de tu repo y espera a que el workflow
   "Deploy to GitHub Pages" termine (icono verde ✅).
4. Tu portfolio estará en `https://h4ck3nd.github.io/PaginaCV/`.

A partir de aquí, cada vez que hagas `git push` a `v2` se despliega solo.

### Opción B — manual con el paquete `gh-pages`

```bash
npm install -D gh-pages
```
Añade a `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
Luego:
```bash
npm run deploy
```
Y en Settings → Pages → Source, elige **Deploy from a branch** → rama `gh-pages`.

## Despliegue con Node.js (autoalojado, p. ej. en uno de tus LXC)

El servidor Express incluido sirve el build y expone `/api/contact` como
placeholder para recibir el formulario de contacto sin `mailto:`.

```bash
npm run build
npm run start        # node server/index.js → http://localhost:3000
# o en un solo paso:
npm run serve
```

Detrás de tu **Nginx Proxy Manager** puedes exponerlo como un subdominio más
de `*.diseo.duckdns.org`, igual que el resto de tus servicios.

Para recibir los mensajes del formulario de verdad, conecta en
`server/index.js` (función `/api/contact`) tu proveedor de email preferido
(nodemailer + SMTP, Resend, o incluso un webhook a tu **n8n**).

### Estadísticas de HackTheBox en tiempo real

El sitio muestra tus stats de HTB (rango, puntos, ranking, owns...) de dos
formas, con fallback automático:

1. **Modo en vivo (requiere el servidor Node corriendo):** el frontend
   consulta `/api/htb-stats`, que a su vez llama server-side a la API real
   de HackTheBox (`labs.hackthebox.com/api/v4/user/profile/basic/{id}`) con
   tu App Token, cacheando la respuesta 5 minutos. El token **nunca** llega
   al navegador.
2. **Modo estático (GitHub Pages, sin backend):** si `/api/htb-stats` no
   responde JSON (404 de GitHub Pages), el frontend cae automáticamente al
   **badge oficial de HTB** (`hackthebox.com/badge/image/{id}`), una imagen
   que HTB genera dinámicamente y que ya refleja tus stats reales sin
   necesidad de ninguna clave.

Para activar el modo en vivo:

```bash
cp .env.example .env
# Ve a https://app.hackthebox.com → Settings → App Tokens → genera uno
# y pégalo en .env como HTB_APP_TOKEN=...
npm run serve
```

Si despliegas en un LXC de tu Proxmox con systemd, define `HTB_APP_TOKEN`
como variable de entorno del servicio (no la subas nunca a git — `.env`
ya está en `.gitignore`).

## Stack técnico

- **React 19** + **Vite** — SPA
- **Tailwind CSS 3** — estilos utilitarios + tema custom (`tailwind.config.js`)
- **Framer Motion** — animaciones de scroll-reveal y del panel del homelab
- **lucide-react** / **react-icons** — iconografía
- **Express** — servidor Node opcional para autoalojar + endpoint de contacto

## Accesibilidad

- Foco de teclado visible en todos los elementos interactivos
- Respeta `prefers-reduced-motion`
- Contraste AA en textos principales sobre fondo oscuro
- Responsive completo (probado en 390px / 768px / 1440px)
