import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section, { Reveal } from './Section'
import { homelab } from '../data/content'
import {
  Router, ShieldEllipsis, Cpu, Server, Cloud, ChevronDown,
  ScanSearch, Download, Zap, KeyRound, FileCode, Smartphone,
  Camera, DownloadCloud, Box,
} from 'lucide-react'

const nodeIcons = { cpu: Cpu, server: Server, cloud: Cloud }
const appIcons = {
  'shield-search': ScanSearch,
  download: Download,
  bolt: Zap,
  key: KeyRound,
  markdown: FileCode,
  apple: Smartphone,
  cctv: Camera,
  'download-circle': DownloadCloud,
}

function NodeCard({ node, open, onToggle }) {
  const Icon = nodeIcons[node.icon] || Box
  return (
    <div className="glass-panel overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <div
          className="h-12 w-12 rounded-xl grid place-items-center shrink-0 border"
          style={{ borderColor: `${node.color}40`, background: `${node.color}14` }}
        >
          <Icon size={20} style={{ color: node.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-white">{node.name}</p>
          <p className="text-xs text-slate-500 font-mono mt-0.5">{node.specs}</p>
        </div>
        <ChevronDown
          size={18}
          className={`text-slate-500 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-white/10">
              {node.services && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {node.services.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              )}
              {node.lxc && <LxcList lxc={node.lxc} color={node.color} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LxcList({ lxc, color }) {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <div className="mt-4 space-y-2">
      {lxc.map((c, i) => (
        <div key={c.name} className="rounded-lg border border-white/8 bg-white/[0.02]">
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 text-left min-w-0"
            disabled={!c.apps}
          >
            <span className="font-mono text-[10px] text-slate-600 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: color }} />
            <span className="text-sm text-slate-200 font-medium shrink-0 whitespace-nowrap">{c.name}</span>
            <span className="text-xs text-slate-500 ml-auto hidden sm:block truncate min-w-0">{c.desc}</span>
            {c.apps && (
              <ChevronDown size={14} className={`text-slate-500 shrink-0 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
            )}
          </button>
          <AnimatePresence initial={false}>
            {c.apps && openIdx === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 gap-2 px-3.5 pb-3.5 pt-1">
                  {c.apps.map((app) => {
                    const AppIcon = appIcons[app.icon] || Box
                    return (
                      <div key={app.title} className="flex items-start gap-2.5 rounded-md bg-white/[0.03] border border-white/5 p-2.5">
                        <AppIcon size={14} className="text-signal-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-slate-200">{app.title}</p>
                          <p className="text-[11px] text-slate-500 leading-snug">{app.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default function Homelab() {
  const [open, setOpen] = useState('proxmox')

  return (
    <Section
      id="homelab"
      index="06"
      eyebrow="topology.map"
      title="Infraestructura & Homelab"
      subtitle="Tres nodos físicos/cloud unidos por una malla WireGuard casera, con un reverse proxy DuckDNS + Nginx Proxy Manager exponiendo solo lo necesario."
    >
      {/* Diagrama superior: gateway → vpn → nodos */}
      <Reveal className="relative mb-2">
        <div className="flex flex-col items-center gap-3">
          <div className="glass-panel px-5 py-3 flex items-center gap-2.5">
            <Router size={16} className="text-volt-400" />
            <span className="font-mono text-sm text-slate-200">{homelab.gateway.name}</span>
          </div>
          <div className="h-6 w-px bg-gradient-to-b from-volt-400/60 to-signal-400/60 animate-pulseLine" />
          <div className="glass-panel px-5 py-3 flex items-center gap-2.5 border-signal-400/30">
            <ShieldEllipsis size={16} className="text-signal-400" />
            <span className="font-mono text-sm text-slate-200">{homelab.vpn.name}</span>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 max-w-lg mx-auto mt-4">
          {homelab.vpn.detail}
        </p>

        {/* Conectores decorativos hacia los 3 nodos (solo desktop) */}
        <div className="hidden md:block relative h-14 mt-2">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
            <path d="M50 0 L16.6 40" stroke="rgba(43,230,164,0.35)" strokeWidth="0.4" fill="none" />
            <path d="M50 0 L50 40" stroke="rgba(43,230,164,0.35)" strokeWidth="0.4" fill="none" />
            <path d="M50 0 L83.3 40" stroke="rgba(43,230,164,0.35)" strokeWidth="0.4" fill="none" />
            <circle cx="50" cy="0" r="1" fill="#2be6a4" />
            <circle cx="16.6" cy="40" r="1" fill="#2be6a4" />
            <circle cx="50" cy="40" r="1" fill="#2be6a4" />
            <circle cx="83.3" cy="40" r="1" fill="#2be6a4" />
          </svg>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5 md:-mt-2">
        {homelab.nodes.map((node, i) => (
          <Reveal key={node.id} delay={i * 0.08}>
            <NodeCard node={node} open={open === node.id} onToggle={() => setOpen(open === node.id ? null : node.id)} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-6 glass-panel p-4 text-xs text-slate-500 text-center font-mono">
        wazuh:// 3 agentes activos → raspberry-pi · oracle-cloud · proxmox-host — SIEM/XDR centralizado en el LXC Wazuh
      </Reveal>
    </Section>
  )
}
