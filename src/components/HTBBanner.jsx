import { Reveal } from './Section'
import { htb } from '../data/content'
import { Trophy, ExternalLink } from 'lucide-react'

export default function HTBBanner() {
  return (
    <section className="relative py-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <a
            href={htb.url}
            target="_blank"
            rel="noreferrer"
            className="glass-panel flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-7 hover:shadow-glow transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-signal-500/10 border border-signal-500/25 grid place-items-center">
                <Trophy size={20} className="text-signal-400" />
              </div>
              <div>
                <p className="font-display font-semibold text-white">Hack The Box — {htb.username}</p>
                <p className="text-sm text-slate-400">{htb.cert} · 400+ máquinas resueltas</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-signal-400 group-hover:translate-x-0.5 transition-transform">
              app.hackthebox.com/users/1940973 <ExternalLink size={13} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
