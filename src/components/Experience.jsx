import Section, { Reveal } from './Section'
import { experience } from '../data/content'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="career.log"
      title="Experiencia laboral"
    >
      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[9px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-500/60 via-volt-400/30 to-transparent" />
        <div className="space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.period} delay={i * 0.08} className="relative">
              <span className="absolute -left-8 sm:-left-10 top-1.5 h-4 w-4 rounded-full bg-void-950 border-2 border-signal-500 shadow-[0_0_12px_rgba(43,230,164,0.6)]" />
              <div className="glass-panel p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-white flex items-center gap-2">
                    <Briefcase size={15} className="text-signal-400" /> {job.role}
                  </h3>
                  <span className="chip">{job.period}</span>
                </div>
                <p className="text-volt-400 text-sm font-medium mb-3">{job.org}</p>
                <ul className="space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-sm text-slate-400 flex gap-2">
                      <span className="text-signal-500/70 mt-1">▸</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
