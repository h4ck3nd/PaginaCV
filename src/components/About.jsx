import { Mail, Phone, BookOpen, MapPin, GraduationCap, Server, Network, Laptop } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Section, { Reveal } from './Section'
import { profile, certifications, languages, education } from '../data/content'

const eduIcons = { shield: GraduationCap, server: Server, network: Network, laptop: Laptop }

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="whoami" title="Perfil profesional">
      <div className="grid lg:grid-cols-3 gap-6">
        <Reveal className="lg:col-span-2 glass-panel p-6 sm:p-8">
          <p className="text-slate-300 leading-relaxed text-[15px]">{profile.summary}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-signal-500/80 mb-3">Contacto</h3>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-3 text-slate-300">
                  <Mail size={15} className="text-signal-400 shrink-0" />
                  <a href={`mailto:${profile.email}`} className="link-dotted">{profile.email}</a>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Phone size={15} className="text-signal-400 shrink-0" /> {profile.phone}
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <MapPin size={15} className="text-signal-400 shrink-0" /> {profile.location}
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <FaGithub size={14} className="text-signal-400 shrink-0" />
                  <a href={profile.social.github} target="_blank" rel="noreferrer" className="link-dotted">github.com/D1se0</a>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <BookOpen size={15} className="text-signal-400 shrink-0" />
                  <a href={profile.social.gitbook} target="_blank" rel="noreferrer" className="link-dotted">H4cker_B00k</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-signal-500/80 mb-3">Idiomas</h3>
              <div className="space-y-3">
                {languages.map((l) => (
                  <div key={l.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{l.name}</span>
                      <span className="text-signal-400 font-mono text-xs">{l.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-signal-500 to-volt-400 rounded-full" style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="glass-panel p-6 sm:p-8 flex flex-col gap-6">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal-500/80 mb-3">Certificaciones</h3>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c.name} className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-signal-500/10 border border-signal-500/20 grid place-items-center shrink-0">
                    <GraduationCap size={16} className="text-signal-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-200 leading-tight">{c.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal-500/80 mb-3">Educación</h3>
            <ul className="space-y-3">
              {education.map((e) => {
                const Icon = eduIcons[e.icon] || GraduationCap
                return (
                  <li key={e.title} className="flex items-start gap-3">
                    <Icon size={15} className="text-volt-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-slate-200 leading-tight">{e.title}</p>
                      <p className="text-xs text-slate-500">{e.org} · {e.period}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
