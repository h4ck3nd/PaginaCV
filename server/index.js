// server/index.js
// Servidor Node.js + Express que sirve el build de producción de React
// (carpeta /dist) y expone un endpoint opcional de contacto.
//
// Uso:
//   npm run build      → genera /dist
//   npm run start       → node server/index.js (sirve en http://localhost:PORT)
//
// Nota: para GitHub Pages no necesitas este servidor — basta con publicar
// el contenido de /dist. Este servidor es útil si prefieres desplegar en
// tu propia infraestructura (p. ej. uno de tus LXC de Proxmox, detrás de
// tu Nginx Proxy Manager) en lugar de un hosting estático.

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import rateLimit from 'express-rate-limit'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000
const DIST_DIR = path.join(__dirname, '..', 'dist')

app.disable('x-powered-by')
app.use(express.json({ limit: '20kb' }))

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

// Sirve los ficheros estáticos generados por Vite
app.use(express.static(DIST_DIR, { maxAge: '1h', index: false }))

// Fallback SPA: cualquier ruta no-API devuelve index.html
app.get(/^(?!\/api\/).*/, (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`✔ Portfolio servido en http://localhost:${PORT}`)
})
