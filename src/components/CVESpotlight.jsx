import Section, { Reveal } from './Section'
import { cves } from '../data/content'
import { AlertTriangle, ExternalLink, Bug } from 'lucide-react'

const sevColor = {
  Critical: '#ff5468',
  High: '#ff8a4c',
  Medium: '#ffc25c',
  Low: '#2be6a4',
}

export default function CVESpotlight() {
  return (
    <Section
      id="cve"
      index="04"
      eyebrow="cve.record"
      title={cves.length > 1 ? 'CVEs en posesión' : 'CVE en posesión'}
    >
      <div className="space-y-5">
        {cves.map((cve, i) => {
          const color = sevColor[cve.severity] || sevColor.Medium
          return (
            <Reveal key={cve.id} delay={i * 0.08}>
              <div className="glass-panel p-6 sm:p-10 relative overflow-hidden">
                <div
                  className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl"
                  style={{ background: `${color}1a` }}
                />
                <div className="relative flex flex-col lg:flex-row gap-8 lg:items-center">
                  <div className="shrink-0">
                    <div
                      className="h-24 w-24 rounded-2xl grid place-items-center animate-floaty border"
                      style={{ background: `${color}1a`, borderColor: `${color}4d` }}
                    >
                      <Bug size={40} style={{ color }} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className="font-mono text-xs px-2.5 py-1 rounded-md border"
                        style={{ background: `${color}26`, color, borderColor: `${color}4d` }}
                      >
                        {cve.severity} · CVSS {cve.cvss}
                      </span>
                      <span className="chip">{cve.cwe}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-1">{cve.id}</h3>
                    <p className="text-slate-300 font-medium mb-3">{cve.title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{cve.description}</p>

                    {cve.cvssVector && (
                      <p className="mt-3 font-mono text-[11px] text-slate-500 break-all">{cve.cvssVector}</p>
                    )}

                    <div className="mt-5 flex flex-wrap gap-3">
                      {cve.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-mono text-signal-400 hover:text-signal-300 transition-colors"
                        >
                          <ExternalLink size={14} /> {l.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center gap-2 font-mono text-xs" style={{ color: `${color}b3` }}>
                    <AlertTriangle size={16} />
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
