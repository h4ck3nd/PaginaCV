import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} {profile.name} — <span className="text-signal-400">d1se0</span>
        </p>
        <p className="font-mono text-xs">
          built with React · glass & blur · <span className="text-signal-400">exit 0</span>
        </p>
      </div>
    </footer>
  )
}
