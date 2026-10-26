import { useMemo, useState } from 'react'
import Section, { Reveal } from './Section'
import { bbPlatforms, bugBounty, statusMeta, severityOrder } from '../data/content'
import { ShieldAlert, Info, ExternalLink, ChevronDown, Star, Award } from 'lucide-react'

const sevColor = {
  Critical: '#ff5468',
  High: '#ff8a4c',
  Medium: '#ffc25c',
  Low: '#2be6a4',
  Informative: '#94a3b8',
}

const PAGE_SIZE = 8

function FeaturedCard({ b, i }) {
  const st = statusMeta[b.status] || statusMeta.pending
  const color = sevColor[b.severity] || sevColor.Medium

  return (
    <Reveal delay={i * 0.08}>
      <div
        className="glass-panel relative overflow-hidden p-5 sm:p-7 border-2"
        style={{ borderColor: `${st.color}33` }}
      >
        <div
          className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl"
          style={{ background: `${st.color}17` }}
        />
        <div className="relative flex flex-col lg:flex-row gap-5 lg:items-start">
          <div className="shrink-0">
            <div
              className="h-14 w-14 rounded-2xl grid place-items-center border animate-floaty"
              style={{ background: `${st.color}14`, borderColor: `${st.color}40` }}
            >
              <Star size={26} style={{ color: st.color, fill: st.color }} />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md font-bold"
                style={{ color: st.color, background: `${st.color}1a`, border: `1px solid ${st.color}4d` }}
              >
                <Award size={12} /> Logro destacado
              </span>
              <span
                className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-md font-bold"
                style={{ color: st.color, background: `${st.color}1f`, border: `1px solid ${st.color}59` }}
              >
                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: st.color }} />
                {st.label}
              </span>
              <span
                className="font-mono text-[11px] px-2 py-1 rounded-md border"
                style={{ color, borderColor: `${color}40`, background: `${color}12`, borderWidth: 1 }}
              >
                {b.severity} · CVSS {b.cvss.toFixed(1)}
              </span>
            </div>

            <h4 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">{b.title}</h4>
            <p className="font-mono text-xs text-volt-400 mt-1.5">{b.program} · {b.type}</p>

            {b.desc && (
              <p className="text-sm text-slate-400 mt-2.5 leading-relaxed max-w-3xl">{b.desc}</p>
            )}

            {b.note && (
              <p className="font-mono text-[11px] text-slate-500 mt-2.5 border-l-2 pl-3" style={{ borderColor: `${st.color}4d` }}>
                {b.note}
              </p>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function BugBounty() {
  const [filter, setFilter] = useState('All')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const featured = useMemo(() => bugBounty.filter((b) => b.featured), [])
  const listable = useMemo(() => bugBounty.filter((b) => !b.featured), [])

  const counts = useMemo(() => {
    const c = { All: listable.length }
    for (const sev of severityOrder) c[sev] = listable.filter((b) => b.severity === sev).length
    return c
  }, [listable])

  const sorted = useMemo(() => {
    const filtered = filter === 'All' ? listable : listable.filter((b) => b.severity === filter)
    return [...filtered].sort(
      (a, b) =>
        severityOrder.indexOf(a.severity) - severityOrder.indexOf(b.severity) ||
        (b.date ? new Date(b.date).getTime() : 0) - (a.date ? new Date(a.date).getTime() : 0)
    )
  }, [filter, listable])

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
      <Reveal className="glass-panel p-5 sm:p-7 mb-8 relative overflow-hidden border-2 border-amber-400/20">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="h-10 w-10 rounded-xl grid place-items-center border border-amber-400/40 bg-amber-400/10"
          >
            <Star size={20} className="text-amber-300" fill="#fcd34d" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Logros destacados <span className="text-amber-300">★</span>
            </h3>
            <p className="text-xs text-slate-400">
              Vulnerabilidades aceptadas en programas de bug bounty de grandes empresas — highlight del historial.
            </p>
          </div>
        </div>

        <div className="relative grid gap-3">
          {featured.map((b, i) => (
            <FeaturedCard key={b.id} b={b} i={i} />
          ))}
        </div>
      </Reveal>

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
