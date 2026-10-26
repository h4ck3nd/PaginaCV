import { useMemo, useState } from 'react'
import Section, { Reveal } from './Section'
import { bbPlatforms, bugBounty, statusMeta, severityOrder } from '../data/content'
import { ShieldAlert, Info, ExternalLink, ChevronDown } from 'lucide-react'

const sevColor = {
  Critical: '#ff5468',
  High: '#ff8a4c',
  Medium: '#ffc25c',
  Low: '#2be6a4',
  Informative: '#94a3b8',
}

const PAGE_SIZE = 8

export default function BugBounty() {
  const [filter, setFilter] = useState('All')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const counts = useMemo(() => {
    const c = { All: bugBounty.length }
    for (const sev of severityOrder) c[sev] = bugBounty.filter((b) => b.severity === sev).length
    return c
  }, [])

  const sorted = useMemo(() => {
    const filtered = filter === 'All' ? bugBounty : bugBounty.filter((b) => b.severity === filter)
    return [...filtered].sort(
      (a, b) =>
        severityOrder.indexOf(a.severity) - severityOrder.indexOf(b.severity) ||
        (b.date ? new Date(b.date).getTime() : 0) - (a.date ? new Date(a.date).getTime() : 0)
    )
  }, [filter])

  const list = sorted.slice(0, visible)
  const hasMore = visible < sorted.length

  function handleFilter(s) {
    setFilter(s)
    setVisible(PAGE_SIZE)
  }

  return (
    <Section
      id="bugbounty"
      index="05"
      eyebrow="bugbounty.db"
      title="Bug Bounty & vulnerabilidades reportadas"
      subtitle="Programas privados y públicos en YesWeHack, Secur0 e Intigriti, además de auditorías directas a empresas como Repsol e Iberpay."
    >
      <Reveal className="grid sm:grid-cols-3 gap-4 mb-8">
        {bbPlatforms.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="glass-panel p-5 flex items-center justify-between group hover:shadow-glow transition-shadow"
          >
            <div>
              <p className="font-display font-semibold text-white">{p.name}</p>
              <p className="font-mono text-xs text-signal-400 mt-0.5">@{p.username}</p>
            </div>
            <ExternalLink size={15} className="text-slate-500 group-hover:text-signal-400 transition-colors" />
          </a>
        ))}
      </Reveal>

      <Reveal delay={0.05} className="glass-panel p-4 mb-6 flex items-start gap-3 text-sm text-slate-400">
        <Info size={16} className="text-volt-400 mt-0.5 shrink-0" />
        <p>
          Por ética profesional y responsabilidad en la divulgación, este listado muestra únicamente la
          categoría, severidad y estado de cada hallazgo — nunca PoCs, endpoints o payloads, especialmente
          en programas todavía pendientes de resolución.
        </p>
      </Reveal>

      <div className="flex flex-wrap gap-2 mb-6">
        {['All', ...severityOrder].map((s) => (
          <button
            key={s}
            onClick={() => handleFilter(s)}
            className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filter === s
                ? 'border-signal-400 text-signal-300 bg-signal-400/10'
                : 'border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/25'
            }`}
          >
            {s} <span className="opacity-50">({counts[s] ?? 0})</span>
          </button>
        ))}
      </div>

      <div className="grid gap-3">
        {list.map((b, i) => {
          const st = statusMeta[b.status] || statusMeta.pending
          return (
            <Reveal key={b.id} delay={Math.min(i * 0.03, 0.3)}>
              <div className="glass-panel p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:border-white/20 transition-colors">
                <div
                  className="shrink-0 h-9 w-9 rounded-lg grid place-items-center border"
                  style={{ borderColor: `${sevColor[b.severity]}40`, background: `${sevColor[b.severity]}14` }}
                >
                  <ShieldAlert size={16} style={{ color: sevColor[b.severity] }} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-slate-200 font-medium leading-snug">{b.title}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {b.program} · {b.type}
                    {b.note && <span className="text-signal-400"> · {b.note}</span>}
                  </p>
                  {b.desc && (
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed max-w-3xl">{b.desc}</p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span
                    className="font-mono text-[11px] px-2 py-1 rounded-md border"
                    style={{ color: sevColor[b.severity], borderColor: `${sevColor[b.severity]}40`, background: `${sevColor[b.severity]}12` }}
                  >
                    {b.severity} · {b.cvss.toFixed(1)}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: st.color }} />
                    {st.label}
                  </span>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="btn-ghost"
          >
            Ver más ({sorted.length - visible} restantes) <ChevronDown size={15} />
          </button>
        </div>
      )}
      {!hasMore && sorted.length > PAGE_SIZE && (
        <div className="flex justify-center mt-6">
          <button onClick={() => setVisible(PAGE_SIZE)} className="btn-ghost">
            Ver menos
          </button>
        </div>
      )}
    </Section>
  )
}
