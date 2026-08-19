# d1se0 // Portfolio — React + Node.js

Portfolio profesional de **Adrián García López (d1se0)** — Ethical Hacker / Bug Bounty
Hunter — migrado desde el HTML estático original a **React (Vite) + Tailwind CSS**,
con un servidor **Node.js/Express** opcional para autoalojarlo.

Diseño "hacker glass": glassmorphism, blur, acentos terminal (verde/cian sobre
fondo casi negro), tipografía monoespaciada (JetBrains Mono) + Sora, animaciones
con `framer-motion`, y una pieza central: un **mapa de topología de red interactivo**
de tu infraestructura real (Raspberry Pi 4, Proxmox VE con 10 LXC, Oracle Cloud,
WireGuard VPN).

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
`main` construye y publica solo.

1. Sustituye el contenido de tu repo `PaginaCV` por este proyecto (conservando
   la carpeta `.git`):
   ```bash
   cd tu-repo-PaginaCV
   git rm -rf .          # borra el HTML antiguo del repo (no el historial)
   # copia aquí dentro TODOS los archivos de este zip, incluida .github/
   git add .
   git commit -m "Migración a React + Vite + Node"
   git push origin main
   ```
2. En GitHub → tu repo → **Settings → Pages → Build and deployment → Source**:
   selecciona **GitHub Actions** (no "Deploy from a branch").
3. Ve a la pestaña **Actions** de tu repo y espera a que el workflow
   "Deploy to GitHub Pages" termine (icono verde ✅).
4. Tu portfolio estará en `https://h4ck3nd.github.io/PaginaCV/`.

A partir de aquí, cada vez que hagas `git push` a `main` se despliega solo.

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
