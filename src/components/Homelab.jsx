import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section, { Reveal } from './Section'
import ServiceModal from './ServiceModal'
import { homelab, serviceDetails } from '../data/content'
import {
  ShieldEllipsis, Cpu, Server, Cloud, ChevronDown, Network,
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

/** Cable SVG con un pulso de luz animado viajando de un extremo a otro. */
function Cable({ d, color, delay = 0 }) {
  return (
    <>
      <path d={d} stroke={`${color}33`} strokeWidth="0.6" fill="none" />
      <path
        d={d}
        stroke={color}
        strokeWidth="0.6"
        fill="none"
        strokeDasharray="4 10"
        className="animate-pulseLine"
        style={{ animationDelay: `${delay}s` }}
      />
      <circle r="1.1" fill={color} filter="url(#glow)">
        <animateMotion dur="2.6s" begin={`${delay}s`} repeatCount="indefinite" path={d} />
      </circle>
    </>
  )
}

/** Un servicio clicable que abre la ficha detallada. */
function ServiceChip({ name, onOpen }) {
  const hasDetail = !!serviceDetails[name]
  return (
    <button
      onClick={() => onOpen(name)}
      className={`chip transition-colors ${hasDetail ? 'hover:border-signal-400/60 hover:text-signal-300 cursor-pointer' : 'cursor-default opacity-70'}`}
    >
      {name}
    </button>
  )
}

function LxcList({ lxc, color, onOpen }) {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <div className="mt-4 space-y-2">
      {lxc.map((c, i) => (
        <div key={c.name} className="rounded-lg border border-white/8 bg-white/[0.02]">
          <div className="w-full flex items-center gap-3 px-3.5 py-2.5 text-left">
            <span className="font-mono text-[10px] text-slate-600 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: color }} />
            <button
              onClick={() => (c.apps ? setOpenIdx(openIdx === i ? null : i) : onOpen(c.name))}
              className="text-sm text-slate-200 font-medium shrink-0 whitespace-nowrap hover:text-signal-300 transition-colors"
            >
              {c.name}
            </button>
            <span className="text-xs text-slate-500 ml-auto hidden sm:block truncate min-w-0">{c.desc}</span>
            {c.apps && (
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-label="Desplegar apps">
                <ChevronDown size={14} className={`text-slate-500 shrink-0 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
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
                      <button
                        key={app.title}
                        onClick={() => onOpen(app.title)}
                        className="flex items-start gap-2.5 rounded-md bg-white/[0.03] border border-white/5 p-2.5 text-left hover:border-signal-400/40 transition-colors"
                      >
                        <AppIcon size={14} className="text-signal-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-slate-200">{app.title}</p>
                          <p className="text-[11px] text-slate-500 leading-snug">{app.description}</p>
                        </div>
                      </button>
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

function NodeCard({ node, open, onToggle, onOpen, isHub }) {
  const Icon = nodeIcons[node.icon] || Box
  return (
    <div className={`glass-panel overflow-hidden ${isHub ? 'border-purple-400/25' : ''}`}>
      <button onClick={onToggle} className="w-full flex items-center gap-4 p-5 text-left">
        <div
          className="h-12 w-12 rounded-xl grid place-items-center shrink-0 border"
          style={{ borderColor: `${node.color}40`, background: `${node.color}14` }}
        >
          <Icon size={20} style={{ color: node.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-display font-semibold text-white">{node.name}</p>
          <p className="text-xs text-slate-500 font-mono mt-0.5">{node.specs}</p>
          {(node.vpnBadge || node.vpnRole) && (
            <span className="inline-flex items-center gap-1.5 mt-2 font-mono text-[10px] px-2 py-0.5 rounded-full border border-signal-500/25 bg-signal-500/10 text-signal-300">
              <ShieldEllipsis size={10} /> {node.vpnBadge || node.vpnRole}
            </span>
          )}
        </div>
        <ChevronDown size={18} className={`text-slate-500 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} />
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
              {node.gatewayNote && (
                <p className="text-xs text-volt-300/80 bg-volt-400/5 border border-volt-400/15 rounded-lg px-3 py-2 mt-4">
                  {node.gatewayNote}
                </p>
              )}
              {node.services && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {node.services.map((s) => (
                    <ServiceChip key={s} name={s} onOpen={onOpen} />
                  ))}
                </div>
              )}
              {node.lxc && <LxcList lxc={node.lxc} color={node.color} onOpen={onOpen} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Homelab() {
  const [open, setOpen] = useState('proxmox')
  const [activeService, setActiveService] = useState(null)

  return (
    <Section
      id="homelab"
      index="06"
      eyebrow="topology.map"
      title="Infraestructura & Homelab"
      subtitle="Oracle Cloud actúa como nodo central en la nube, alojando el servidor WireGuard de mi VPN casera. A él se conectan el Proxmox y la Raspberry Pi — cada uno con sus propios servicios. Nginx Proxy Manager vive únicamente en el Proxmox. Toca cualquier servicio para ver su ficha técnica."
    >
      {/* Hub: Oracle Cloud */}
      <Reveal className="max-w-xl mx-auto mb-2">
        <NodeCard
          node={homelab.hub}
          open={open === 'oracle'}
          onToggle={() => setOpen(open === 'oracle' ? null : 'oracle')}
          onOpen={setActiveService}
          isHub
        />
      </Reveal>

      {/* Cables animados hacia los dos spokes (solo desktop) */}
      <div className="hidden md:block relative h-16">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
          <defs>
            <filter id="glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <Cable d="M50 0 L27 40" color="#2be6a4" delay={0} />
          <Cable d="M50 0 L73 40" color="#5fd0ff" delay={0.9} />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:-mt-1">
        {homelab.spokes.map((node, i) => (
          <Reveal key={node.id} delay={i * 0.08}>
            <NodeCard
              node={node}
              open={open === node.id}
              onToggle={() => setOpen(open === node.id ? null : node.id)}
              onOpen={setActiveService}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-6 glass-panel p-4 text-xs text-slate-500 text-center font-mono flex items-center justify-center gap-2">
        <Network size={13} className="text-signal-400" />
        wazuh:// 3 agentes activos → raspberry-pi · oracle-cloud · proxmox-host — SIEM/XDR centralizado
      </Reveal>

      <ServiceModal name={activeService} onClose={() => setActiveService(null)} />
    </Section>
  )
}
