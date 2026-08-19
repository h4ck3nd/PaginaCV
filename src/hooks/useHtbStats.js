import { useEffect, useRef, useState } from 'react'

const POLL_MS = 60_000 // refresco cada 60s mientras la sección esté visible

/**
 * Intenta obtener estadísticas en tiempo real de HackTheBox desde el
 * servidor Node (/api/htb-stats). Si el sitio está servido de forma
 * estática (GitHub Pages) ese endpoint no existe y la petición fallará
 * limpiamente — en ese caso el componente que use este hook debe recurrir
 * al badge oficial de HTB como alternativa.
 */
export function useHtbStats() {
  const [state, setState] = useState({ status: 'loading', data: null, error: null })
  const timerRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function fetchStats() {
      try {
        const res = await fetch('/api/htb-stats', { headers: { Accept: 'application/json' } })
        const contentType = res.headers.get('content-type') || ''

        // GitHub Pages devuelve el index.html (text/html) para cualquier ruta
        // desconocida — lo tratamos como "endpoint no disponible", no como error.
        if (!contentType.includes('application/json')) {
          if (!cancelled) setState({ status: 'unavailable', data: null, error: null })
          return
        }

        const json = await res.json()
        if (cancelled) return

        if (!res.ok || !json.ok) {
          setState({ status: 'error', data: null, error: json.error || `HTTP ${res.status}` })
          return
        }

        setState({ status: 'live', data: json, error: null })
      } catch {
        if (!cancelled) setState({ status: 'unavailable', data: null, error: null })
      }
    }

    fetchStats()
    timerRef.current = setInterval(fetchStats, POLL_MS)

    return () => {
      cancelled = true
      clearInterval(timerRef.current)
    }
  }, [])

  return state
}
