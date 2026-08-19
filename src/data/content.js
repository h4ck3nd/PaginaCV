// ─────────────────────────────────────────────────────────────────────────
// Contenido central del portfolio de d1se0 / Adrián García López
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Adrián García López',
  handle: 'd1se0',
  roles: [
    'Ethical Hacker',
    'Bug Bounty Hunter',
    'Técnico en Ciberseguridad',
    'Blue Team Specialist',
    'SOC Analyst',
    'Web Exploitation Specialist',
  ],
  location: 'Toledo, España',
  email: 'ciberseguridad12345@gmail.com',
  phone: '+34 685 459 231',
  summary:
    'Apasionado por la seguridad informática con experiencia como Blue Team en entorno SOC, análisis forense, criptografía, configuración de firewalls y redes. Enfocado en hacking ético, protección de sistemas y explotación avanzada de aplicaciones web (certificado CWES por Hack The Box). Cazador de vulnerabilidades activo con un CVE en posesión y decenas de hallazgos reportados en programas privados y públicos.',
  social: {
    github: 'https://github.com/D1se0',
    hackerlabs: 'https://d1se0.github.io/hackerlabs',
    gitbook: 'https://dise0.gitbook.io/h4cker_b00k',
    youtube: 'https://www.youtube.com/@Hacking_Community',
    htb: 'https://app.hackthebox.com/users/1940973',
  },
}

export const stats = [
  { label: 'CVE en posesión', value: '1' },
  { label: 'Vulnerabilidades reportadas', value: '25+' },
  { label: 'Máquinas hackeadas', value: '400+' },
  { label: 'Auditorías realizadas', value: '39' },
]

export const skills = {
  Ofensiva: [
    'Pentesting Web',
    'OWASP Top 10',
    'SQL Injection',
    'XSS / CSRF / SSRF',
    'IDOR / Broken Access Control',
    'Race Conditions',
    'API Security',
    'Active Directory (Kerberos, SMB, LDAP)',
    'Escalada de privilegios',
    'Post-explotación',
    'Evasión de AV/EDR',
  ],
  Defensiva: [
    'Blue Team / SOC',
    'Análisis forense',
    'Criptología',
    'Firewalls (Palo Alto)',
    'Detección de amenazas',
    'Respuesta a incidentes',
    'Hardening de sistemas',
  ],
  Infraestructura: [
    'Linux',
    'Windows Server',
    'Redes / Segmentación',
    'Docker & LXC',
    'Proxmox VE',
    'Wireguard / VPN',
    'Reverse Proxy (NPM)',
    'CI/CD básico',
    'Bash / PowerShell',
  ],
}

export const toolStack = [
  'Kali Linux', 'Burp Suite Pro', 'Metasploit', 'Nmap', 'BloodHound',
  'CrackMapExec', 'Impacket', 'SQLMap', 'ffuf / gobuster', 'Docker',
  'Proxmox', 'Palo Alto', 'PowerShell', 'Git', 'Wireshark', 'John the Ripper',
]

export const certifications = [
  {
    name: 'eJPT — eLearnSecurity Junior Penetration Tester',
    issuer: 'INE Security',
    icon: 'shield',
  },
  {
    name: 'CWES — Certified Web Exploitation Specialist',
    issuer: 'Hack The Box',
    icon: 'globe',
  },
]

export const languages = [
  { name: 'Español', level: 'Nativo', pct: 100 },
  { name: 'Inglés', level: 'B1', pct: 50 },
]

export const experience = [
  {
    role: 'Pentester (Consultor de Ciberseguridad)',
    org: 'Cysia — Consultoría de Ciberseguridad, Toledo',
    period: '2026',
    bullets: [
      'Auditorías de seguridad y pruebas de penetración para 39 empresas',
      'Identificación de vulnerabilidades y evaluación de riesgos en entornos reales',
      'Elaboración de informes técnicos y ejecutivos con recomendaciones de remediación',
    ],
  },
  {
    role: 'Técnico de Ciberseguridad (SOC)',
    org: 'Unitel Ciberseguridad',
    period: '2024',
    bullets: [
      'Monitoreo de IPs y detección de amenazas',
      'Análisis de campañas de phishing',
      'Configuración de firewalls (Palo Alto)',
      'Gestión y protección de redes',
      'Respuesta ante incidentes de seguridad',
    ],
  },
  {
    role: 'Oficial Administrativo',
    org: 'Poligón & Naturalia',
    period: '2023',
    bullets: [
      'Soporte técnico a usuarios',
      'Gestión y mantenimiento de redes',
      'Control de calidad de sistemas',
    ],
  },
  {
    role: 'Técnico Informático',
    org: 'MundoPixel',
    period: '2023',
    bullets: [
      'Reparaciones de hardware y software',
      'Programación web básica',
      'Soporte técnico integral',
    ],
  },
]

export const education = [
  {
    title: 'Certificado de Seguridad Informática',
    org: 'Unitel Sistemas',
    period: '2023–2024',
    icon: 'shield',
  },
  {
    title: 'CFGS Administración de Sistemas Informáticos en Red (ASIR)',
    org: 'IES Azarquiel — Toledo',
    period: 'Grado Superior',
    icon: 'server',
  },
  {
    title: 'CFGM Sistemas Microinformáticos y Redes',
    org: 'IES Las Salinas',
    period: '2021–2023',
    icon: 'network',
  },
  {
    title: 'FPB Informática de Oficina',
    org: 'IES Las Salinas',
    period: '2019–2021',
    icon: 'laptop',
  },
]

// ── CVE ──────────────────────────────────────────────────────────────────
export const cve = {
  id: 'CVE-2026-19871',
  title: 'Hardcoded Credentials in Prospero Flow CRM — Employee Onboarding',
  description:
    'Vulnerabilidad de credenciales embebidas ("changeme") en el flujo de alta de empleados del módulo RRHH de Prospero Flow CRM. Cada cuenta creada por el formulario de onboarding recibía una contraseña fija y predecible sin ningún mecanismo de notificación o cambio forzado, permitiendo el acceso completo a cualquier cuenta de empleado recién creada conociendo únicamente su email.',
  cwe: 'CWE-798 — Use of Hard-coded Credentials',
  severity: 'High',
  cvss: '8.1',
  links: [
    { label: 'CVE.org — Registro oficial', url: 'https://www.cve.org/CVERecord?id=CVE-2026-19871' },
    { label: 'Secur0 CNA — Publicación', url: 'https://secur0.com/en/cna/cve-list/cve-2026-19871-hardcoded-credentials-in-prospero-flow-crm-employee-onboarding' },
  ],
}

// ── Bug Bounty ───────────────────────────────────────────────────────────
// Nota de responsabilidad: por ético profesional, este portfolio NO expone
// PoCs, endpoints reales, payloads ni pasos de explotación de vulnerabilidades
// -- especialmente las que siguen pendientes de resolución en programas
// privados. Solo se muestra la clase de vulnerabilidad, severidad y estado,
// tal y como es práctica habitual en un "hall of fame" de bug bounty.

export const bbPlatforms = [
  { name: 'YesWeHack', username: 'd1se0', url: 'https://yeswehack.com' },
  { name: 'Secur0', username: 'd1se0', url: 'https://secur0.com' },
  { name: 'Intigriti', username: 'd1se0', url: 'https://www.intigriti.com' },
]

export const severityOrder = ['Critical', 'High', 'Medium', 'Low']

export const bugBounty = [
  {
    id: 'ignition-debug-rce-key-rotation',
    title: 'RCE-adjacent: exposición no autenticada de endpoint de debug (Ignition)',
    program: 'Programa privado — Prospero Flow CRM',
    type: 'RCE / Debug Exposure',
    severity: 'Critical',
    cvss: 10.0,
    status: 'triaged',
    date: '2026-07-25',
  },
  {
    id: 'cross-tenant-account-hijacking',
    title: 'Cross-Tenant Account Hijacking vía reasignación arbitraria de tenant',
    program: 'Programa privado — Prospero Flow CRM',
    type: 'Broken Access Control',
    severity: 'Critical',
    cvss: 9.9,
    status: 'pending',
    date: '2026-07-18',
  },
  {
    id: 'global-privilege-escalation-permission',
    title: 'Escalada de privilegios global vía bypass de type-confusion',
    program: 'Programa privado — Prospero Flow CRM',
    type: 'Broken Access Control',
    severity: 'Critical',
    cvss: 9.9,
    status: 'pending',
    date: '2026-07-25',
  },
  {
    id: 'password-reset-host-header-poisoning',
    title: 'Account Takeover vía Host Header Poisoning en reset de contraseña',
    program: 'VDP Público — Prospero Flow CRM',
    type: 'Host Header Injection',
    severity: 'Critical',
    cvss: 9.2,
    status: 'pending',
    date: '2026-08-05',
  },
  {
    id: 'bankcard-routes-wrong-permission-chain',
    title: 'Broken Access Control en gestión de tarjetas bancarias (chain)',
    program: 'VDP Público — Prospero Flow CRM',
    type: 'Broken Access Control',
    severity: 'Critical',
    cvss: 9.1,
    status: 'pending',
    date: '2026-08-08',
  },
  {
    id: 'repsol-ibilsare-hardcoded-aes-oauth',
    title: 'Credenciales AES y OAuth hardcodeadas en bundle público (movilidad eléctrica)',
    program: 'Repsol Bug Bounty (YesWeHack)',
    type: 'Hardcoded Credentials',
    severity: 'Critical',
    cvss: 9.3,
    status: 'triaged',
    date: '2026-08-13',
  },
  {
    id: 'hardcoded-default-password-rrhh',
    title: "Contraseña por defecto hardcodeada en onboarding de empleados",
    program: 'Programa privado — Prospero Flow CRM',
    type: 'Hardcoded Credentials',
    severity: 'High',
    cvss: 8.1,
    status: 'resolved',
    date: '2026-07-18',
    note: 'Base del CVE-2026-19871',
  },
  {
    id: 'stored-xss-svg-logo-upload',
    title: 'Stored XSS no autenticado vía upload de logo SVG',
    program: 'Programa privado — Prospero Flow CRM',
    type: 'Unrestricted File Upload → XSS',
    severity: 'High',
    cvss: 8.2,
    status: 'resolved',
    date: '2026-07-18',
  },
  {
    id: 'stored-xss-email-module',
    title: 'Stored XSS por bypass de sanitizador regex en módulo de Email',
    program: 'Programa privado — Prospero Flow CRM',
    type: 'Stored XSS',
    severity: 'High',
    cvss: 8.0,
    status: 'accepted',
    date: '2026-07-18',
  },
  {
    id: 'ticket-idor-own-data-bypass',
    title: 'IDOR — bypass de aislamiento "own data" en tickets',
    program: 'Programa privado — Prospero Flow CRM',
    type: 'IDOR',
    severity: 'High',
    cvss: 8.1,
    status: 'pending',
    date: '2026-07-25',
  },
  {
    id: 'cross-tenant-ticket-customer-leak',
    title: 'Cross-Tenant Data Leak vía customer_id no validado',
    program: 'Programa privado — Prospero Flow CRM',
    type: 'IDOR',
    severity: 'High',
    cvss: 7.7,
    status: 'triaged',
    date: '2026-07-18',
  },
  {
    id: 'idor-transaction-financial-data-leak',
    title: 'IDOR en transacciones: fuga de datos financieros entre tenants',
    program: 'VDP Público — Prospero Flow CRM',
    type: 'IDOR',
    severity: 'High',
    cvss: 7.1,
    status: 'resolved',
    date: '2026-07-30',
  },
  {
    id: 'product-photo-html-extension-xss',
    title: 'Extension confusion en upload de fotos → Stored XSS',
    program: 'VDP Público — Prospero Flow CRM',
    type: 'Unrestricted File Upload → XSS',
    severity: 'High',
    cvss: 8.0,
    status: 'pending',
    date: '2026-08-10',
  },
  {
    id: 'must-change-password-api-bypass',
    title: 'Bypass del control "must change password" vía API REST (JWT)',
    program: 'Programa privado — Prospero Flow CRM',
    type: 'Authentication Bypass',
    severity: 'High',
    cvss: 7.5,
    status: 'pending',
    date: '2026-07-25',
  },
  {
    id: 'repsol-soscae-idor-companies',
    title: 'IDOR de lectura/escritura cross-tenant en plataforma CAE',
    program: 'Repsol Bug Bounty (YesWeHack)',
    type: 'IDOR',
    severity: 'High',
    cvss: 8.1,
    status: 'triaged',
    date: '2026-08-13',
  },
  {
    id: 'repsol-gigya-uid-account-disclosure',
    title: 'Divulgación de cuenta de usuario sin autenticación (Gigya)',
    program: 'Repsol Bug Bounty (YesWeHack)',
    type: 'Information Disclosure',
    severity: 'High',
    cvss: 7.5,
    status: 'triaged',
    date: '2026-08-14',
  },
  {
    id: 'ganaenergia-hardcoded-jwt-cups-exposure',
    title: 'JWT hardcodeado en APK pública expone datos de contrato',
    program: 'Repsol Bug Bounty (YesWeHack)',
    type: 'Hardcoded Credentials',
    severity: 'High',
    cvss: 7.5,
    status: 'triaged',
    date: '2026-08-14',
  },
  {
    id: 'race-condition-multiple-purchase',
    title: 'Race Condition permite compra múltiple debitando un solo precio',
    program: 'Securo — Programa privado',
    type: 'Race Condition',
    severity: 'High',
    cvss: 8.3,
    status: 'triaged',
    date: '2026-04-14',
  },
  {
    id: 'reflected-xss-cookie-theft',
    title: 'Reflected XSS permite robo de cookies de sesión',
    program: 'Securo — Programa privado',
    type: 'XSS',
    severity: 'High',
    cvss: 7.1,
    status: 'triaged',
    date: '2026-04-18',
  },
  {
    id: 'broken-access-score-update',
    title: 'Actualización no autorizada de puntuación (ELO) del usuario',
    program: 'Securo — Programa privado',
    type: 'Broken Access Control',
    severity: 'High',
    cvss: 7.1,
    status: 'triaged',
    date: '2026-04-14',
  },
  {
    id: 'icalendar-injection-html-email',
    title: 'Inyección iCalendar + HTML sin sanitizar en emails de invitación',
    program: 'VDP Público — Prospero Flow CRM',
    type: 'iCalendar Injection / XSS',
    severity: 'Medium',
    cvss: 6.5,
    status: 'pending',
    date: '2026-08-01',
  },
  {
    id: 'registration-bypass-ratelimit',
    title: 'Registro sin verificar y bypass de rate limit vía cabeceras/Tor',
    program: 'Securo — Programa privado',
    type: 'Rate Limit Bypass',
    severity: 'Medium',
    cvss: 6.9,
    status: 'triaged',
    date: '2026-04-13',
  },
  {
    id: 'idor-get-parameter',
    title: 'IDOR en parámetros GET expone datos de otros usuarios',
    program: 'Plataforma privada',
    type: 'IDOR',
    severity: 'Medium',
    cvss: 6.4,
    status: 'triaged',
    date: '2026-04-14',
  },
  {
    id: 'unsubscribe-cross-tenant-optin-manipulation',
    title: 'Manipulación cross-tenant de opt-in sin autenticación',
    program: 'VDP Público — Prospero Flow CRM',
    type: 'Broken Access Control',
    severity: 'Medium',
    cvss: 5.3,
    status: 'pending',
    date: '2026-08-12',
  },
  {
    id: 'stack-trace-disclosure-jwt',
    title: 'Stack Trace Disclosure sin autenticación en endpoint JWT refresh',
    program: 'Programa privado — Prospero Flow CRM',
    type: 'Information Disclosure',
    severity: 'Medium',
    cvss: 5.3,
    status: 'triaged',
    date: '2026-07-18',
  },
  {
    id: 'dos-graphql-mutation',
    title: 'Denegación de servicio vía GraphQL mutation batching',
    program: 'Plataforma privada',
    type: 'DoS',
    severity: 'Medium',
    cvss: 4.3,
    status: 'triaged',
    date: '2026-04-14',
  },
  {
    id: 'example-bug',
    title: 'SQL Injection en panel de autenticación',
    program: 'Programa privado',
    type: 'SQL Injection',
    severity: 'Critical',
    cvss: 9.8,
    status: 'resolved',
    date: '2025-03-14',
  },
]

export const statusMeta = {
  resolved: { label: 'Resuelto', color: '#2be6a4' },
  accepted: { label: 'Aceptado', color: '#5fd0ff' },
  triaged: { label: 'Triado', color: '#ffc25c' },
  pending: { label: 'Pendiente', color: '#94a3b8' },
}

// ── HackTheBox ───────────────────────────────────────────────────────────
export const htb = {
  username: 'd1se0',
  url: 'https://app.hackthebox.com/users/1940973',
  cert: 'CWES — Certified Web Exploitation Specialist',
}

// ── Homelab / infraestructura ───────────────────────────────────────────
export const homelab = {
  gateway: {
    name: 'DuckDNS + Nginx Proxy Manager',
    detail: 'Resolución dinámica de dominios y proxy inverso con TLS para todos los subdominios *.diseo.duckdns.org',
  },
  vpn: {
    name: 'WireGuard VPN',
    detail: 'Malla privada casera: acceso remoto cifrado a los tres nodos sin exponer puertos innecesarios a Internet',
  },
  nodes: [
    {
      id: 'raspberry',
      name: 'Raspberry Pi 4',
      specs: '8 GB RAM · Debian · nodo edge 24/7',
      icon: 'cpu',
      color: '#2be6a4',
      services: [
        'Portainer', 'Vaultwarden + Caddy', 'Gitea', 'Jellyfin',
        'Command Vault v2', 'Blog + Cloudflare Tunnel', 'WoL + OpenMediaVault',
        'Tailscale + Home Assistant', 'NetWatch', 'PiControl Dashboard',
        'WriteUpForge', 'WriteupManager', 'ThumbGen', 'ServerDocs',
      ],
    },
    {
      id: 'proxmox',
      name: 'Lenovo Mini PC — Proxmox VE',
      specs: 'Hipervisor · ProxmoxMenux · 10 LXC',
      icon: 'server',
      color: '#5fd0ff',
      lxc: [
        { name: 'Mafl', desc: 'Dashboard central de servicios' },
        { name: 'WireGuard', desc: 'Túnel VPN del homelab' },
        { name: 'Nginx Proxy Manager', desc: 'Reverse proxy + TLS' },
        { name: 'n8n', desc: 'Automatización de workflows' },
        {
          name: 'Debian — Apps propias',
          desc: 'LXC con 8 servicios desarrollados a medida',
          apps: [
            { title: 'HackPanel', description: 'Plataforma personal de auditoría y hacking ético', icon: 'shield-search' },
            { title: 'MeTube', description: 'Descarga vídeo/audio desde YouTube y otras plataformas', icon: 'download' },
            { title: 'ElectroPlan', description: 'Diseño y gestión de esquemas eléctricos', icon: 'bolt' },
            { title: 'CHMOD Panel', description: 'Calculadora de permisos CHMOD para Linux', icon: 'key' },
            { title: 'Markdown View', description: 'Visor y renderizador de archivos Markdown', icon: 'markdown' },
            { title: 'iPhone Manager', description: 'Gestor de archivos y conversor para iPhone por USB', icon: 'apple' },
            { title: 'CamWatch', description: 'Índice mundial de cámaras públicas por categorías', icon: 'cctv' },
            { title: 'Downloader', description: 'Descarga y conversión de vídeos y audio', icon: 'download-circle' },
          ],
        },
        { name: 'AdGuard Home', desc: 'DNS sinkhole y bloqueo de publicidad' },
        { name: 'Proxmox Backup Server', desc: 'Copias de seguridad de todos los LXC/VM' },
        { name: 'MeTube', desc: 'Instancia dedicada de descargas' },
        { name: 'Wazuh', desc: 'SIEM/XDR — 3 agentes: Raspberry Pi, Oracle Cloud y el propio Proxmox' },
      ],
    },
    {
      id: 'oracle',
      name: 'Oracle Cloud',
      specs: 'VPS cloud · always-free tier · servicios públicos',
      icon: 'cloud',
      color: '#c084fc',
      services: [
        'Hermes Agent', 'SysReptor', 'WGDashboard', 'OracleControl Dashboard',
        'Fail2Ban + F2B Sentinel', 'Fail2Ban (SysReptor + Flask-login)',
        'Blog Hacking — writeups service', 'GoodsRead', 'Saldo', 'Service Manager',
      ],
    },
  ],
}

export const projects = [
  { name: 'H4cker_B00k', desc: 'Wiki técnica con metodologías, cheatsheets y técnicas de pentesting', url: profile.social.gitbook, icon: 'book' },
  { name: 'HackerLabs', desc: 'Laboratorios de seguridad ofensiva documentados paso a paso', url: profile.social.hackerlabs, icon: 'flask' },
  { name: 'Hacking_Community', desc: 'Canal de YouTube: pentesting, CTFs y herramientas profesionales', url: profile.social.youtube, icon: 'youtube' },
  { name: 'HackPanel', desc: 'Plataforma personal de auditoría y hacking ético, self-hosted', icon: 'shield-search' },
  { name: 'NetWatch', desc: 'Monitorización de red y estado de servicios del homelab', icon: 'activity' },
  { name: 'Command Vault', desc: 'Bóveda personal de comandos y snippets de pentesting (v2)', icon: 'terminal' },
  { name: 'WriteUpForge / WriteupManager', desc: 'Generación y gestión de writeups de máquinas y CTFs', icon: 'file-text' },
  { name: 'Hermes Agent', desc: 'Agente de monitorización/automatización desplegado en varios servidores', icon: 'radio' },
]
