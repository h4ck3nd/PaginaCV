import Section, { Reveal } from './Section'
import { skills, toolStack } from '../data/content'
import { Swords, ShieldHalf, Boxes } from 'lucide-react'

const catIcons = { Ofensiva: Swords, Defensiva: ShieldHalf, Infraestructura: Boxes }
const catColor = { Ofensiva: 'text-alert-critical', Defensiva: 'text-volt-400', Infraestructura: 'text-signal-400' }

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="capabilities.sh"
      title="Habilidades & stack"
      subtitle="Perfil híbrido con base sólida en seguridad ofensiva, experiencia real en SOC y gestión propia de infraestructura."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([cat, items], i) => {
          const Icon = catIcons[cat]
          return (
            <Reveal key={cat} delay={i * 0.08} className="glass-panel p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <Icon size={17} className={catColor[cat]} />
                <h3 className="font-display font-semibold text-white">{cat}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.2} className="glass-panel p-6 sm:p-8 mt-6">
        <h3 className="font-mono text-xs uppercase tracking-widest text-signal-500/80 mb-4">Stack de herramientas</h3>
        <div className="flex flex-wrap gap-2">
          {toolStack.map((t) => (
            <span key={t} className="chip border-volt-400/20 text-volt-300/90 bg-volt-400/5">{t}</span>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
