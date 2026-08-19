import { useState } from 'react'
import Section, { Reveal } from './Section'
import { profile } from '../data/content'
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    // El formulario abre el cliente de correo del visitante con los datos
    // precargados. Si despliegas el servidor Node incluido (server/index.js),
    // puedes sustituir esto por una llamada POST a /api/contact.
    const subject = encodeURIComponent(`Contacto desde el portfolio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Section id="contact" index="08" eyebrow="connect.sh" title="Hablemos">
      <div className="grid lg:grid-cols-5 gap-6">
        <Reveal className="lg:col-span-2 glass-panel p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-3">
              Disponible para auditorías, colaboraciones y bug bounty
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Si tienes un proyecto que necesita una revisión de seguridad, un pentest, o simplemente
              quieres hablar de ciberseguridad — escríbeme.
            </p>
          </div>
          <div className="mt-6 space-y-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-slate-300 link-dotted">
              <Mail size={15} className="text-signal-400" /> {profile.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Phone size={15} className="text-signal-400" /> {profile.phone}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3 glass-panel p-6 sm:p-8">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <CheckCircle2 size={36} className="text-signal-400 mb-3" />
              <p className="text-slate-200 font-medium">Tu cliente de correo se ha abierto</p>
              <p className="text-slate-500 text-sm mt-1">Revisa la ventana de tu gestor de email para enviar el mensaje.</p>
              <button onClick={() => setSent(false)} className="btn-ghost mt-5">Enviar otro</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wide text-slate-500">Nombre</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 outline-none focus:border-signal-400/50 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wide text-slate-500">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 outline-none focus:border-signal-400/50 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wide text-slate-500">Mensaje</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 outline-none focus:border-signal-400/50 transition-colors resize-none"
                  placeholder="Cuéntame en qué puedo ayudarte..."
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Enviar mensaje <Send size={15} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
