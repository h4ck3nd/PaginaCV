import Section, { Reveal } from './Section'
import { cve } from '../data/content'
import { AlertTriangle, ExternalLink, Bug } from 'lucide-react'

export default function CVESpotlight() {
  return (
    <Section id="cve" index="04" eyebrow="cve.record" title="CVE en posesión">
      <Reveal>
        <div className="glass-panel p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-alert-critical/10 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row gap-8 lg:items-center">
            <div className="shrink-0">
              <div className="h-24 w-24 rounded-2xl bg-alert-critical/10 border border-alert-critical/30 grid place-items-center animate-floaty">
                <Bug size={40} className="text-alert-critical" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-alert-critical/15 text-alert-critical border border-alert-critical/30">
                  {cve.severity} · CVSS {cve.cvss}
                </span>
                <span className="chip">{cve.cwe}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">{cve.id}</h3>
              <p className="text-slate-300 font-medium mb-3">{cve.title}</p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{cve.description}</p>

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

            <div className="hidden lg:flex items-center gap-2 text-alert-critical/70 font-mono text-xs writing-mode-vertical">
              <AlertTriangle size={16} />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
