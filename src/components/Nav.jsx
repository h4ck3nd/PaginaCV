import { useEffect, useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'

const LINKS = [
  { href: '#about', label: 'whoami' },
  { href: '#skills', label: 'skills' },
  { href: '#cve', label: 'cve' },
  { href: '#bugbounty', label: 'bugbounty' },
  { href: '#homelab', label: 'homelab' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`glass rounded-2xl flex items-center justify-between px-4 sm:px-6 py-3 transition-shadow ${
            scrolled ? 'shadow-glass' : ''
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-white">
            <Terminal size={18} className="text-signal-400" />
            <span>
              d1se0<span className="text-signal-400">@</span>portfolio
              <span className="terminal-caret" />
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 font-mono text-[13px]">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-lg text-slate-300 hover:text-signal-400 hover:bg-white/5 transition-colors"
              >
                <span className="text-signal-500/60">/</span>{l.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="glass rounded-2xl mt-2 p-3 md:hidden font-mono text-sm">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-300 hover:text-signal-400 hover:bg-white/5"
              >
                <span className="text-signal-500/60">/</span>{l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
