// server/index.js
// Servidor Node.js + Express que sirve el build de producción de React
// (carpeta /dist), expone un endpoint opcional de contacto, y un proxy
// server-side a la API real de HackTheBox para mostrar estadísticas en
// tiempo real sin exponer el token de API en el navegador.
//
// Uso:
//   npm run build      → genera /dist
//   npm run start       → node server/index.js (sirve en http://localhost:PORT)
//
// Nota: para GitHub Pages no necesitas este servidor — basta con publicar
// el contenido de /dist. Este servidor es útil si prefieres desplegar en
// tu propia infraestructura (p. ej. uno de tus LXC de Proxmox, detrás de
// tu Nginx Proxy Manager) en lugar de un hosting estático. Sin este
// servidor corriendo, la web usa automáticamente el badge oficial de HTB
// como alternativa (ver src/components/HTBBanner.jsx).

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import rateLimit from 'express-rate-limit'
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000
const DIST_DIR = path.join(__dirname, '..', 'dist')

// Token de App de HackTheBox (Settings → App Tokens en hackthebox.com).
// NUNCA lo pongas en el código ni en el frontend — solo como variable de
// entorno del servidor. Ver .env.example.
const HTB_APP_TOKEN = process.env.HTB_APP_TOKEN || ''
const HTB_USER_ID = process.env.HTB_USER_ID || '1940973'
const HTB_CACHE_TTL_MS = 5 * 60 * 1000 // 5 minutos — evita saturar la API de HTB

app.disable('x-powered-by')
app.use(express.json({ limit: '20kb' }))

// ── CORS mínimo para /api — permite que el frontend estático (dev server
// en otro puerto, u otro origen) pueda consumir estos endpoints en local ──
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  next()
})

// Límite de peticiones básico para el endpoint de contacto
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
})

// Endpoint de contacto — placeholder. Conecta aquí tu proveedor de email
// (nodemailer + SMTP, Resend, etc.) si quieres recibir los mensajes del
// formulario directamente en el servidor en lugar de usar mailto:.
app.post('/api/contact', contactLimiter, (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Faltan campos obligatorios.' })
  }
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Email no válido.' })
  }

  // TODO: integrar envío real (nodemailer / Resend / webhook a n8n, etc.)
  console.log('[contact] nuevo mensaje:', { name, email, message: message.slice(0, 500) })

  return res.json({ ok: true })
})

// ── HackTheBox — estadísticas en tiempo real ────────────────────────────
let htbCache = { data: null, fetchedAt: 0 }

app.get('/api/htb-stats', async (req, res) => {
  if (!HTB_APP_TOKEN) {
    return res.status(503).json({
      ok: false,
      error: 'HTB_APP_TOKEN no configurado en el servidor. Define esta variable de entorno para habilitar estadísticas en vivo.',
    })
  }

  const now = Date.now()
  if (htbCache.data && now - htbCache.fetchedAt < HTB_CACHE_TTL_MS) {
    return res.json({ ok: true, cached: true, fetchedAt: htbCache.fetchedAt, ...htbCache.data })
  }

  try {
    const resp = await fetch(`https://labs.hackthebox.com/api/v4/user/profile/basic/${HTB_USER_ID}`, {
      headers: {
        Authorization: `Bearer ${HTB_APP_TOKEN}`,
        Accept: 'application/json',
      },
    })

    if (!resp.ok) {
      return res.status(resp.status).json({ ok: false, error: `HTB API respondió ${resp.status}` })
    }

    const json = await resp.json()
    const p = json.profile || {}

    const data = {
      name: p.name,
      rank: p.rank,
      ranking: p.ranking,
      points: p.points,
      userOwns: p.user_owns,
      systemOwns: p.system_owns,
      userBloods: p.user_bloods,
      systemBloods: p.system_bloods,
      respects: p.respects,
      currentRankProgress: p.current_rank_progress,
      nextRank: p.next_rank,
      avatar: p.avatar,
      countryName: p.country_name,
    }

    htbCache = { data, fetchedAt: now }
    return res.json({ ok: true, cached: false, fetchedAt: now, ...data })
  } catch (err) {
    console.error('[htb-stats] error:', err.message)
    // Si hay una respuesta cacheada previa, mejor servirla desfasada que fallar
    if (htbCache.data) {
      return res.json({ ok: true, cached: true, stale: true, fetchedAt: htbCache.fetchedAt, ...htbCache.data })
    }
    return res.status(502).json({ ok: false, error: 'No se pudo contactar con la API de HackTheBox.' })
  }
})

// Sirve los ficheros estáticos generados por Vite
app.use(express.static(DIST_DIR, { maxAge: '1h', index: false }))

// Fallback SPA: cualquier ruta no-API devuelve index.html
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`✔ Portfolio servido en http://localhost:${PORT}`)
  if (!HTB_APP_TOKEN) {
    console.log('ℹ HTB_APP_TOKEN no definido — /api/htb-stats devolverá 503 y el frontend usará el badge oficial como alternativa.')
  }
})
