import Section, { Reveal } from './Section'
import { projects } from '../data/content'
import {
  BookOpen, FlaskConical, Radio, Activity, Terminal, FileText, ScanSearch, ArrowUpRight, Box,
} from 'lucide-react'
import { FaYoutube } from 'react-icons/fa'

const icons = {
  book: BookOpen,
  flask: FlaskConical,
  youtube: FaYoutube,
  'shield-search': ScanSearch,
  activity: Activity,
  terminal: Terminal,
  'file-text': FileText,
  radio: Radio,
}

export default function Projects() {
  return (
    <Section
      id="projects"
      index="07"
      eyebrow="projects.list"
      title="Proyectos propios"
      subtitle="Herramientas, wikis y plataformas desarrolladas y mantenidas de forma independiente sobre mi propia infraestructura."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((p, i) => {
          const Icon = icons[p.icon] || Box
          const Wrapper = p.url ? 'a' : 'div'
          return (
            <Reveal key={p.name} delay={i * 0.05}>
              <Wrapper
                {...(p.url ? { href: p.url, target: '_blank', rel: 'noreferrer' } : {})}
                className="glass-panel p-5 h-full flex flex-col group hover:border-signal-400/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-lg bg-signal-500/10 border border-signal-500/20 grid place-items-center">
                    <Icon size={17} className="text-signal-400" />
                  </div>
                  {p.url && <ArrowUpRight size={15} className="text-slate-600 group-hover:text-signal-400 transition-colors" />}
                </div>
                <h3 className="font-display font-semibold text-white text-sm">{p.name}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{p.desc}</p>
              </Wrapper>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
