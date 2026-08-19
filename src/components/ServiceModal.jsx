import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { serviceDetails } from '../data/content'

export default function ServiceModal({ name, onClose }) {
  const detail = name ? serviceDetails[name] : null

  return (
    <AnimatePresence>
      {name && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-void-950/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="glass-panel relative w-full sm:max-w-lg max-h-[85vh] overflow-y-auto p-6 sm:p-7 rounded-b-none sm:rounded-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={name}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 h-8 w-8 grid place-items-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Cerrar"
            >
              <X size={15} />
            </button>

            <p className="eyebrow mb-2">service.info</p>
            <h3 className="font-display font-bold text-xl text-white pr-10">{name}</h3>

            {detail ? (
              <>
                <p className="text-signal-400 text-sm font-medium mt-1">{detail.tagline}</p>
                <p className="text-slate-300 text-sm leading-relaxed mt-4">{detail.summary}</p>

                {detail.highlights?.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {detail.highlights.map((h) => (
                      <li key={h} className="text-sm text-slate-400 flex gap-2">
                        <span className="text-signal-500/70 mt-1">▸</span> {h}
                      </li>
                    ))}
                  </ul>
                )}

                {detail.stack?.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-slate-500 mb-2">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {detail.stack.map((s) => (
                        <span key={s} className="chip">{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p className="text-slate-400 text-sm mt-4">Servicio propio del homelab. Ficha detallada próximamente.</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
