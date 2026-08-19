import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Section({ id, index, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-start gap-4 mb-10">
            {index && (
              <span className="font-mono text-xs text-signal-500/60 mt-1.5 hidden sm:block">{index}</span>
            )}
            <div>
              {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
              <h2 className="section-heading">{title}</h2>
              {subtitle && <p className="text-slate-400 mt-2 max-w-2xl">{subtitle}</p>}
            </div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
