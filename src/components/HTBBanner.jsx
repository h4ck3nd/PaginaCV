import { useEffect, useState } from 'react'
import { Reveal } from './Section'
import { htb, dockerlabs } from '../data/content'
import { useHtbStats } from '../hooks/useHtbStats'
import { Trophy, ExternalLink, Crown, Box, Radio } from 'lucide-react'

function timeAgo(ts) {
  const s = Math.max(0, Math.floor((Date.now() - ts) / 1000))
  if (s < 60) return `hace ${s}s`
  const m = Math.floor(s / 60)
  return `hace ${m}min`
}

function LiveDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal-500" />
    </span>
  )
}

function HtbStatBlock({ label, value }) {
  return (
    <div className="rounded-lg bg-white/[0.03] border border-white/8 px-3 py-2">
      <p className="font-display font-bold text-white text-lg leading-none">{value ?? '—'}</p>
      <p className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">{label}</p>
    </div>
  )
}

function HtbLiveStats({ data }) {
  const [, forceTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => forceTick((v) => v + 1), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div>
      <div className="flex items-center gap-1.5 mb-3">
        <LiveDot />
        <span className="font-mono text-[10px] uppercase tracking-widest text-signal-400">
          En vivo · actualizado {timeAgo(data.fetchedAt)}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <HtbStatBlock label="Rango" value={data.rank} />
        <HtbStatBlock label="Ranking global" value={data.ranking ? `#${data.ranking}` : '—'} />
        <HtbStatBlock label="Puntos" value={data.points} />
        <HtbStatBlock label="User owns" value={data.userOwns} />
        <HtbStatBlock label="System owns" value={data.systemOwns} />
        <HtbStatBlock label="Respects" value={data.respects} />
      </div>
    </div>
  )
}

export default function HTBBanner() {
  const htbStats = useHtbStats()

  return (
    <section className="relative py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid sm:grid-cols-2 gap-4">
        <Reveal>
          <div className="glass-panel flex flex-col gap-4 p-6 h-full hover:shadow-glow transition-shadow group relative">
            <a href={htb.url} target="_blank" rel="noreferrer" className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-signal-500/10 border border-signal-500/25 grid place-items-center">
                  <Trophy size={18} className="text-signal-400" />
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">Hack The Box</p>
                  <p className="text-xs text-slate-500 font-mono">@{htb.username}</p>
                </div>
              </div>
              <ExternalLink size={14} className="text-slate-600 group-hover:text-signal-400 transition-colors" />
            </a>

            {htbStats.status === 'live' ? (
              <HtbLiveStats data={htbStats.data} />
            ) : (
              <>
                {/* Badge oficial de HTB — imagen generada en vivo por HTB con
                    rango, puntos y ownership actualizados en tiempo real.
                    Se usa como alternativa cuando /api/htb-stats no está
                    disponible (p. ej. en GitHub Pages, sin servidor Node). */}
                <a href={htb.url} target="_blank" rel="noreferrer">
                  <img
                    src={htb.badgeUrl}
                    alt={`Badge en vivo de HackTheBox — ${htb.username}`}
                    className="w-full rounded-lg border border-white/10"
                    loading="lazy"
                  />
                </a>
                <div className="flex items-center gap-1.5">
                  <Radio size={11} className="text-volt-400" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-volt-400">
                    Badge oficial HTB · actualizado por HTB directamente
                  </span>
                </div>
              </>
            )}

            <p className="text-xs text-slate-500">{htb.cert} · {htb.machinesPwned} máquinas resueltas</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={dockerlabs.url}
            target="_blank"
            rel="noreferrer"
            className="glass-panel flex flex-col gap-4 p-6 h-full hover:shadow-glow transition-shadow group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-volt-400/10 border border-volt-400/25 grid place-items-center">
                  <Box size={18} className="text-volt-400" />
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">DockerLabs</p>
                  <p className="text-xs text-slate-500 font-mono">dockerlabs.es</p>
                </div>
              </div>
              <ExternalLink size={14} className="text-slate-600 group-hover:text-volt-400 transition-colors" />
            </div>

            <div className="flex-1 flex flex-col justify-center gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full bg-volt-400/10 border border-volt-400/25 text-volt-300">
                  <Crown size={12} /> {dockerlabs.role}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full bg-signal-400/10 border border-signal-400/25 text-signal-300">
                  🏆 {dockerlabs.ranking}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{dockerlabs.description}</p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
