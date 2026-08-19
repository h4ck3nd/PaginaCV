import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ArrowDownRight, ShieldCheck } from 'lucide-react'
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { profile, stats } from '../data/content'

function useTypewriter(words, speed = 85, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[i % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((v) => v + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, i, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="top" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-5 gap-10 items-center">
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="eyebrow flex items-center gap-2 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-500" />
            </span>
            status: online · accepting engagements
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[1.05] text-white">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-lg sm:text-xl text-signal-400">
            <span className="text-slate-500">$</span> whoami <span className="text-slate-500">→</span>{' '}
            {profile.handle}
          </p>

          <div className="mt-6 h-8 font-mono text-base sm:text-lg text-volt-400">
            {typed}
            <span className="terminal-caret" />
          </div>

          <p className="mt-6 max-w-xl text-slate-400 leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#bugbounty" className="btn-primary">
              Ver hallazgos <ArrowDownRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Contactar
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a href={profile.social.github} target="_blank" rel="noreferrer"
                 className="h-10 w-10 grid place-items-center rounded-lg border border-white/10 text-slate-300 hover:text-signal-400 hover:border-signal-400/50 transition-colors">
                <FaGithub size={16} />
              </a>
              <a href={profile.social.gitbook} target="_blank" rel="noreferrer"
                 className="h-10 w-10 grid place-items-center rounded-lg border border-white/10 text-slate-300 hover:text-signal-400 hover:border-signal-400/50 transition-colors">
                <BookOpen size={17} />
              </a>
              <a href={profile.social.youtube} target="_blank" rel="noreferrer"
                 className="h-10 w-10 grid place-items-center rounded-lg border border-white/10 text-slate-300 hover:text-signal-400 hover:border-signal-400/50 transition-colors">
                <FaYoutube size={17} />
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
            {stats.map((s) => (
              <div key={s.label} className="glass-panel px-4 py-3">
                <div className="font-display text-xl font-bold text-white">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wide text-slate-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="glass-panel p-5 sm:p-6 relative overflow-hidden animate-floaty">
            <div className="scanline animate-scan" />
            <div className="flex items-center gap-1.5 mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-alert-critical/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-alert-medium/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-500/70" />
              <span className="ml-2 text-[11px] font-mono text-slate-500">session — d1se0@ops:~</span>
            </div>
            <pre className="font-mono text-[12.5px] leading-relaxed text-slate-300 whitespace-pre-wrap">
{`$ id
uid=1000(d1se0) groups=redteam,blueteam,bugbounty

$ cat status.json
{
  "cve": "CVE-2026-19871",
  "bbPlatforms": ["YesWeHack","Secur0","Intigriti"],
  "htb": "Certified Web Exploitation Specialist",
  "homelab": ["Raspberry Pi 4","Proxmox VE","Oracle Cloud"],
  "vpn": "wireguard0 — up"
}

$ echo "building secure systems, breaking insecure ones."`}
            </pre>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-signal-400 font-mono text-xs">
              <ShieldCheck size={15} /> ethical disclosure · always in scope
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
