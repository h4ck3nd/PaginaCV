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
    'Apasionado por la seguridad informática con experiencia como Blue Team en entorno SOC, análisis forense, criptografía, configuración de firewalls y redes. Enfocado en hacking ético, protección de sistemas y explotación avanzada de aplicaciones web (certificado CWES por Hack The Box). Cazador de vulnerabilidades activo con 4 CVE en posesión y decenas de hallazgos reportados en programas privados y públicos.',
  social: {
    github: 'https://github.com/D1se0',
    hackerlabs: 'https://d1se0.github.io/hackerlabs',
    gitbook: 'https://dise0.gitbook.io/h4cker_b00k',
    youtube: 'https://www.youtube.com/@Hacking_Community',
    htb: 'https://app.hackthebox.com/users/1940973',
    linkedin: 'https://www.linkedin.com/in/adriaangaarcialopez',
    dockerlabs: 'https://dockerlabs.es',
  },
}

// ── DockerLabs ───────────────────────────────────────────────────────────
export const dockerlabs = {
  role: 'Co-Fundador',
  ranking: 'Top 1 de la plataforma',
  url: 'https://dockerlabs.es',
  description:
    'DockerLabs es una comunidad hispanohablante de hacking ético que distribuye máquinas vulnerables containerizadas con Docker, fundada por El Pingüino de Mario. Como co-fundador, participo en la dirección de la plataforma y soy autor de varias máquinas (incluida "r00tless", categoría difícil), además de mantener el primer puesto del ranking comunitario.',
}

export const stats = [
  { label: 'CVE en posesión', value: '4' },
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
    url: 'https://certs.ine.com/4504812e-a4c2-46fe-8cb0-115ec856a574',
  },
  {
    name: 'CWES — Certified Web Exploitation Specialist',
    issuer: 'Hack The Box',
    icon: 'globe',
  },
  {
    name: 'Curso avanzado de Hacking Ético y Ciberseguridad',
    issuer: 'Udemy',
    icon: 'graduation',
  },
  {
    name: 'Curso completo de Hacking Ético y Ciberseguridad',
    issuer: 'Udemy',
    icon: 'graduation',
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

// ── CVEs ─────────────────────────────────────────────────────────────────
export const cves = [
  {
    id: 'CVE-2026-19871',
    title: 'Hardcoded Credentials in Prospero Flow CRM — Employee Onboarding',
    description:
      'Vulnerabilidad de credenciales embebidas ("changeme") en el flujo de alta de empleados del módulo RRHH de Prospero Flow CRM. Cada cuenta creada por el formulario de onboarding recibía una contraseña fija y predecible sin ningún mecanismo de notificación o cambio forzado, permitiendo el acceso completo a cualquier cuenta de empleado recién creada conociendo únicamente su email.',
    cwe: 'CWE-798 — Use of Hard-coded Credentials',
    severity: 'Critical',
    cvss: '9.3',
    links: [
      { label: 'CVE.org — Registro oficial', url: 'https://www.cve.org/CVERecord?id=CVE-2026-19871' },
      { label: 'Secur0 CNA — Publicación', url: 'https://secur0.com/en/cna/cve-list/cve-2026-19871-hardcoded-credentials-in-prospero-flow-crm-employee-onboarding' },
    ],
  },
  {
    id: 'CVE-2026-77780',
    title: 'IDOR en claves foráneas de banco — Prospero Flow CRM Transaction Save',
    description:
      'Bypass de autorización por clave controlada por el usuario (CWE-639) en el endpoint de guardado de transacciones de Prospero Flow CRM. Los campos bank_account_id y bank_card_id solo se validaban como enteros, sin comprobar que pertenecieran a la empresa del usuario autenticado — la restricción existía únicamente en el desplegable del formulario, no en el servidor. Al listar la contabilidad, la aplicación resuelve esas relaciones sin scoping de empresa y muestra el nombre de la cuenta, el banco y los últimos cuatro dígitos de la tarjeta de otro tenant, permitiendo enumerar identificadores bancarios de cualquier empresa alojada en la misma instancia sin ninguna interacción de la víctima.',
    cwe: 'CWE-639 — Authorization Bypass Through User-Controlled Key',
    severity: 'Medium',
    cvss: '5.3',
    cvssVector: 'CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:N/VC:L/VI:N/VA:N/SC:N/SI:N/SA:N',
    links: [
      { label: 'CVE.org — Registro oficial', url: 'https://www.cve.org/CVERecord?id=CVE-2026-77780' },
      { label: 'Secur0 CNA — Publicación', url: 'https://secur0.com/en/cna/cve-list/cve-2026-77780-idor-unvalidated-bank-foreign-keys-prospero-transaction-save' },
    ],
  },
  {
    id: 'CVE-2026-78337',
    title: 'Unrestricted Upload → Stored XSS vía logo SVG — Prospero Flow CRM',
    description:
      'Subida de archivos sin restricción (CWE-434) combinada con neutralización insuficiente de entrada (CWE-79) en el endpoint de guardado de empresa de Prospero Flow CRM. El campo logo no aplicaba ninguna validación de tipo, extensión ni tamaño, permitiendo subir un documento SVG con un elemento <script> embebido como logotipo corporativo. El archivo se sirve de forma estática fuera del enrutado de Laravel, sin middleware de autenticación, por lo que cualquier visitante —incluso no autenticado— que abra la URL del logo ejecuta JavaScript arbitrario en el origen de la aplicación.',
    cwe: 'CWE-434 + CWE-79 — Unrestricted Upload of File with Dangerous Type / Stored XSS',
    severity: 'Medium',
    cvss: '4.8',
    cvssVector: 'CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:A/VC:N/VI:L/VA:N/SC:N/SI:L/SA:N',
    links: [
      { label: 'CVE.org — Registro oficial', url: 'https://www.cve.org/CVERecord?id=CVE-2026-78337' },
      { label: 'Secur0 CNA — Publicación', url: 'https://secur0.com/en/cna/cve-list/cve-2026-78337-unrestricted-upload-company-logo-svg-xss' },
    ],
  },
  {
    id: 'CVE-2026-81931',
    title: 'Unrestricted Upload → Stored XSS vía foto de producto — Prospero Flow CRM',
    description:
      'Subida de archivos sin restricción (CWE-434) que deriva en Stored XSS (CWE-79) en el endpoint de guardado de productos de Prospero Flow CRM. La validación clasificaba el archivo únicamente por su contenido, pero el controlador construía el nombre almacenado a partir de la extensión declarada por el cliente, no de la ya validada por contenido. Esto permite subir un archivo con cabecera de imagen válida pero extensión .html declarada por el cliente, que el servidor web sirve como text/html sin requerir sesión. Cualquier usuario con permiso de creación de productos —el rol habitual de Seller, no uno administrativo— puede así ejecutar JavaScript arbitrario contra cualquier visitante que abra la URL de la foto, incluido un CompanyAdmin o SuperAdmin.',
    cwe: 'CWE-434 + CWE-79 — Unrestricted Upload of File with Dangerous Type / Stored XSS',
    severity: 'Medium',
    cvss: '4.8',
    cvssVector: 'CVSS:4.0/AV:N/AC:L/AT:N/PR:L/UI:A/VC:N/VI:L/VA:N/SC:N/SI:L/SA:N',
    links: [
      { label: 'CVE.org — Registro oficial', url: 'https://www.cve.org/CVERecord?id=CVE-2026-81931' },
      { label: 'Secur0 CNA — Publicación', url: 'https://secur0.com/en/cna/cve-list/cve-2026-81931-unrestricted-upload-product-photo-extension-confusion-xss' },
    ],
  },
]

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
    severity: 'Critical',
    cvss: 9.3,
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
    note: 'Asignado como CVE-2026-78337',
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
    note: 'Asignado como CVE-2026-77780',
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
    note: 'Asignado como CVE-2026-81931',
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
// El badge se genera dinámicamente en vivo por HackTheBox (imagen SVG con
// rango, puntos y ownership actualizados en tiempo real) — no requiere API
// key ni backend, se embebe directamente como <img>.
export const htb = {
  username: 'd1se0',
  userId: '1940973',
  url: 'https://app.hackthebox.com/users/1940973',
  badgeUrl: 'https://www.hackthebox.com/badge/image/1940973',
  cert: 'CWES — Certified Web Exploitation Specialist',
  machinesPwned: '400+',
}

// ── Homelab / infraestructura ───────────────────────────────────────────
// Topología real: Oracle Cloud actúa como nodo central en la nube — aloja el
// servidor WireGuard de la VPN casera — y a él se conectan tanto el Proxmox
// como la Raspberry Pi. Nginx Proxy Manager vive únicamente en el Proxmox,
// exponiendo sus LXC y servicios bajo subdominios *.duckdns.org.
export const homelab = {
  hub: {
    id: 'oracle',
    name: 'Oracle Cloud',
    tagline: 'Nodo central en la nube · Always Free Tier',
    specs: 'Ubuntu 24.04 ARM64 · VM.Standard.A1.Flex · 4 OCPU / 24 GB RAM',
    icon: 'cloud',
    color: '#c084fc',
    vpnBadge: 'Servidor WireGuard VPN (10.1.0.1)',
    services: [
      'Hermes Agent', 'SysReptor', 'WGDashboard', 'OracleControl Dashboard',
      'Fail2Ban + F2B·Sentinel', 'Blog Hacking — Writeups Service',
      'GoodsRead', 'Saldo', 'Service Manager',
    ],
  },
  spokes: [
    {
      id: 'raspberry',
      name: 'Raspberry Pi 4',
      specs: '8 GB RAM · Debian 12 (Bookworm) · ARM64 · nodo edge 24/7',
      icon: 'cpu',
      color: '#2be6a4',
      vpnRole: 'Cliente WireGuard (10.1.0.2)',
      services: [
        'Portainer', 'Vaultwarden + Caddy', 'Gitea', 'Jellyfin',
        'Command Vault v2', 'Blog Hacking + Cloudflare Tunnel', 'WoL + OpenMediaVault',
        'Tailscale + Home Assistant', 'NetWatch', 'PiControl Dashboard',
        'WriteUpForge', 'WriteupManager', 'ThumbGen', 'ServerDocs', 'Fail2Ban',
      ],
    },
    {
      id: 'proxmox',
      name: 'Lenovo Mini PC — Proxmox VE',
      specs: 'Hipervisor · ProxmoxMenux · 10 LXC',
      icon: 'server',
      color: '#5fd0ff',
      vpnRole: 'Cliente WireGuard hacia Oracle Cloud',
      gatewayNote: 'Nginx Proxy Manager (LXC propio) expone estos servicios en subdominios *.duckdns.org — es el único reverse proxy de todo el homelab.',
      lxc: [
        { name: 'Mafl', desc: 'Dashboard central de servicios' },
        { name: 'WireGuard', desc: 'Cliente que conecta el Proxmox a la VPN alojada en Oracle Cloud' },
        { name: 'Nginx Proxy Manager', desc: 'Reverse proxy + TLS — único gateway del homelab' },
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
        { name: 'AdGuard Home', desc: 'DNS sinkhole y bloqueo de publicidad para toda la red' },
        { name: 'Proxmox Backup Server', desc: 'Copias de seguridad de todos los LXC/VM' },
        { name: 'MeTube', desc: 'Instancia dedicada de descargas' },
        { name: 'Wazuh', desc: 'SIEM/XDR — 3 agentes: Raspberry Pi, Oracle Cloud y el propio Proxmox' },
      ],
    },
  ],
}

// ── Fichas técnicas detalladas por servicio ─────────────────────────────
// Extraído y resumido de la documentación técnica interna (PDFs), omitiendo
// deliberadamente IPs, puertos de administración, credenciales y rutas del
// sistema por razones de seguridad operativa.
export const serviceDetails = {
  'Portainer': {
    tagline: 'Panel de gestión Docker (UI web)',
    stack: ['Docker', 'Portainer CE'],
    summary: 'Interfaz web que actúa como panel de control central de todos los stacks Docker Compose del servidor: creación, monitorización y ciclo de vida completo de contenedores de forma visual, sin depender de la CLI para el día a día.',
    highlights: ['Gestión visual de todos los contenedores del nodo', 'Acceso exclusivamente por HTTPS/TLS', 'Base para desplegar el resto de servicios containerizados'],
  },
  'Vaultwarden + Caddy': {
    tagline: 'Gestor de contraseñas self-hosted',
    stack: ['Rust', 'Vaultwarden', 'Caddy', 'DuckDNS'],
    summary: 'Implementación ligera y compatible con la API de Bitwarden, ideal para ARM. Caddy actúa como reverse proxy delante, con TLS automático (Let\'s Encrypt) resuelto vía DuckDNS, así que todo el tráfico va cifrado de extremo a extremo bajo un dominio propio.',
    highlights: ['100% self-hosted — cero dependencia de la nube de Bitwarden', 'TLS automático renovado por Caddy', 'Optimizado para arquitectura ARM64'],
  },
  'Gitea': {
    tagline: 'Servidor Git self-hosted',
    stack: ['Gitea', 'PostgreSQL 16'],
    summary: 'Alternativa ligera a GitHub para alojar repositorios privados de proyectos y writeups. Usa PostgreSQL en vez de SQLite para mejor concurrencia en operaciones de push/pull simultáneas.',
    highlights: ['Acceso Git vía SSH dedicado', 'Base de datos PostgreSQL separada', 'Corre íntegramente en la Raspberry Pi'],
  },
  'Jellyfin': {
    tagline: 'Servidor multimedia self-hosted',
    stack: ['Jellyfin', 'Docker (modo host)'],
    summary: 'Alternativa gratuita y de código abierto a Plex/Emby para organizar y transmitir contenido multimedia propio, sin telemetría ni licencias.',
    highlights: ['Modo de red host para transcodificación eficiente', 'Sin dependencias cloud ni suscripciones'],
  },
  'Command Vault v2': {
    tagline: 'Gestor personal de comandos (v2.0.0)',
    stack: ['React', 'Node.js', 'Express', 'SQLite'],
    summary: 'Aplicación full-stack desarrollada a medida para almacenar, buscar y versionar comandos, payloads y procedimientos de pentesting. 258 comandos curados repartidos en 17 categorías temáticas, con API REST propia y despliegue posible en Linux/macOS/Windows/Docker.',
    highlights: ['258 comandos curados en 17 categorías', '100% local — sin telemetría ni llamadas externas', 'API REST propia + frontend en React'],
  },
  'Blog Hacking + Cloudflare Tunnel': {
    tagline: 'Servidor web de writeups CTF/HTB',
    stack: ['HTML/CSS/JS', 'Python3 http.server', 'Cloudflare Tunnel'],
    summary: 'Web estática personalizada con writeups de máquinas de HackTheBox/CTF, cheatsheets y herramientas propias, publicada de forma segura a Internet mediante un túnel de Cloudflare sin abrir puertos en el router.',
    highlights: ['Publicación segura sin port-forwarding', 'Base del propio blog de writeups (blog_hacking en GitHub)'],
  },
  'WoL + OpenMediaVault': {
    tagline: 'Wake-on-LAN & NAS',
    stack: ['Python 3', 'Flask', 'Socket.IO', 'OpenMediaVault'],
    summary: 'Aplicación Flask + WebSocket que enciende remotamente equipos de la red local mediante magic packets, monitorizando su estado en tiempo real por ping, combinada con OpenMediaVault como NAS para almacenamiento centralizado.',
    highlights: ['Encendido remoto de PCs sin acceso físico', 'Estado de red en tiempo real vía WebSocket'],
  },
  'Tailscale + Home Assistant': {
    tagline: 'VPN mesh + domótica',
    stack: ['Tailscale (WireGuard-based)', 'Home Assistant'],
    summary: 'Red mesh privada basada en WireGuard que permite acceder a todos los dispositivos del homelab desde cualquier lugar sin configurar el router, complementada con Home Assistant para automatización del hogar.',
    highlights: ['Cada dispositivo con IP fija en red CGNAT propia', 'Acceso remoto sin abrir puertos'],
  },
  'NetWatch': {
    tagline: 'Network Intelligence Monitor v3.0',
    stack: ['Python 3', 'Flask'],
    summary: 'Sistema propio de monitorización de red con auto-bootstrap y despliegue como servicio systemd, que vigila el estado de todos los dispositivos y servicios de la infraestructura personal.',
    highlights: ['Auto-bootstrap y despliegue reproducible', 'Documentación técnica oficial completa (v3.0)'],
  },
  'PiControl Dashboard': {
    tagline: 'Panel de monitorización y control',
    stack: ['Python 3', 'Flask'],
    summary: 'Panel profesional que monitoriza en tiempo real CPU, RAM, disco, red y temperatura de la Raspberry Pi, y permite gestionar y editar dinámicamente todos los servicios desplegados sin tocar archivos de configuración a mano.',
    highlights: ['Métricas de sistema en tiempo real', 'Alta/edición de servicios desde la propia UI'],
  },
  'WriteUpForge': {
    tagline: 'Plataforma de redacción de writeups',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'WeasyPrint'],
    summary: 'Plataforma para redactar y gestionar writeups de CTF/pentesting con motor de renderizado Markdown propio, exportación a PDF (WeasyPrint) y gráfico de trayectoria de progreso.',
    highlights: ['Exportación a PDF con WeasyPrint', 'Motor Markdown y gráfico de progreso propios'],
  },
  'WriteupManager': {
    tagline: 'Sistema de gestión de writeups v3.0',
    stack: ['Python 3', 'Flask'],
    summary: 'Backend de gestión centralizada de writeups que organiza, indexa y sirve el contenido publicado en el blog de hacking.',
    highlights: ['Indexado y organización centralizada de writeups'],
  },
  'ThumbGen': {
    tagline: 'Generador de miniaturas con IA',
    stack: ['Flask 3.0', 'Python 3', 'SQLite', 'OpenAI GPT-4o', 'DALL·E 3'],
    summary: 'Herramienta que genera miniaturas (thumbnails) automáticamente usando IA generativa, con rotación automática de claves API y un "prompt maestro" adaptable por contexto.',
    highlights: ['Integración con GPT-4o y DALL·E 3', 'Rotación automática de claves API'],
  },
  'ServerDocs': {
    tagline: 'Portal de documentación de infraestructura',
    stack: ['Python', 'Flask', 'Gunicorn', 'Nginx'],
    summary: 'Portal interno que centraliza toda la documentación técnica de los servidores del homelab, desplegado con Gunicorn detrás de Nginx vía systemd.',
    highlights: ['Documentación de infraestructura centralizada', 'Desplegado en producción con Gunicorn + systemd'],
  },
  'Fail2Ban': {
    tagline: 'Protección contra fuerza bruta',
    stack: ['Fail2Ban', 'iptables'],
    summary: 'Vigila los logs del sistema en busca de intentos de autenticación maliciosos y bloquea automáticamente las IPs de origen mediante reglas de firewall. Configuración deliberadamente estricta: pocos intentos fallidos provocan bloqueos largos.',
    highlights: ['Política restrictiva ante escaneos automatizados', 'Protege SSH y servicios web expuestos'],
  },
  'Mafl': {
    tagline: 'Dashboard central de servicios',
    stack: ['Docker (LXC)'],
    summary: 'Panel de inicio centralizado que enlaza todos los servicios desplegados en el Proxmox, a modo de "página de inicio" del homelab.',
    highlights: ['Punto de entrada visual a todos los servicios del homelab'],
  },
  'WireGuard': {
    tagline: 'VPN — cliente/servidor',
    stack: ['WireGuard', 'wg-quick'],
    summary: 'Protocolo VPN moderno y ligero basado en criptografía de curva elíptica. El servidor central corre en Oracle Cloud; Proxmox y Raspberry Pi actúan como clientes conectados a esa misma malla privada.',
    highlights: ['Cifrado moderno de bajo overhead', 'Arquitectura hub-and-spoke con Oracle Cloud como servidor'],
  },
  'Nginx Proxy Manager': {
    tagline: 'Reverse proxy + gestión TLS',
    stack: ['Nginx', 'Let\'s Encrypt', 'DuckDNS'],
    summary: 'Único punto de entrada HTTP/HTTPS de todo el homelab. Gestiona certificados TLS automáticos y enruta cada subdominio *.duckdns.org al LXC/servicio correspondiente dentro del Proxmox.',
    highlights: ['Único reverse proxy de toda la infraestructura', 'Renovación automática de certificados TLS'],
  },
  'n8n': {
    tagline: 'Automatización de workflows',
    stack: ['n8n', 'Node.js'],
    summary: 'Motor de automatización low-code usado para conectar servicios entre sí (notificaciones, tareas programadas, integraciones entre las apps propias del homelab).',
    highlights: ['Automatizaciones entre servicios propios', 'Alternativa self-hosted a Zapier/Make'],
  },
  'AdGuard Home': {
    tagline: 'DNS sinkhole',
    stack: ['AdGuard Home'],
    summary: 'Resolutor DNS que bloquea publicidad y trackers a nivel de red para todos los dispositivos del homelab, sin necesidad de extensiones de navegador.',
    highlights: ['Bloqueo de anuncios a nivel de red completa'],
  },
  'Proxmox Backup Server': {
    tagline: 'Backups de la infraestructura',
    stack: ['Proxmox Backup Server'],
    summary: 'Sistema de copias de seguridad incrementales y deduplicadas de todos los LXC y VMs del hipervisor Proxmox.',
    highlights: ['Backups incrementales deduplicados', 'Cobertura de los 10 LXC + VMs del hipervisor'],
  },
  'MeTube': {
    tagline: 'Descarga de vídeo/audio',
    stack: ['MeTube', 'yt-dlp'],
    summary: 'Interfaz web para descargar y convertir vídeos y audio desde YouTube y otras plataformas, sin depender de servicios de terceros.',
    highlights: ['Descarga self-hosted sin anuncios ni límites'],
  },
  'Wazuh': {
    tagline: 'SIEM / XDR open-source',
    stack: ['Wazuh', 'Elastic Stack'],
    summary: 'Plataforma de detección de amenazas y respuesta que centraliza logs y eventos de seguridad de tres agentes: Raspberry Pi, Oracle Cloud y el propio host Proxmox — el corazón del Blue Team casero.',
    highlights: ['3 agentes activos monitorizando toda la infraestructura', 'Correlación de eventos de seguridad centralizada'],
  },
  'HackPanel': {
    tagline: 'Plataforma personal de auditoría',
    stack: ['Node.js / Python', 'Docker'],
    summary: 'Aplicación propia para centralizar herramientas y flujos de auditoría de seguridad y hacking ético.',
    highlights: ['Herramienta propia de auditoría self-hosted'],
  },
  'ElectroPlan': {
    tagline: 'Diseño de esquemas eléctricos',
    stack: ['Aplicación web propia'],
    summary: 'Herramienta para diseñar y gestionar esquemas eléctricos de forma visual desde el navegador.',
    highlights: ['Diseño visual de esquemas eléctricos'],
  },
  'CHMOD Panel': {
    tagline: 'Calculadora de permisos Linux',
    stack: ['Aplicación web propia'],
    summary: 'Utilidad rápida para calcular y visualizar permisos CHMOD de Linux (octal ↔ simbólico) desde el navegador.',
    highlights: ['Conversión octal/simbólica en tiempo real'],
  },
  'Markdown View': {
    tagline: 'Visor de Markdown',
    stack: ['Aplicación web propia'],
    summary: 'Renderizador de archivos Markdown para visualizar documentación técnica sin necesidad de un editor local.',
    highlights: ['Renderizado instantáneo de documentación .md'],
  },
  'iPhone Manager': {
    tagline: 'Gestor de archivos para iPhone',
    stack: ['Aplicación web propia'],
    summary: 'Herramienta para gestionar y convertir archivos de un iPhone conectado por USB sin depender de iTunes/Finder.',
    highlights: ['Gestión de archivos iOS sin software propietario'],
  },
  'CamWatch': {
    tagline: 'Índice de cámaras públicas',
    stack: ['Aplicación web propia'],
    summary: 'Catálogo mundial de cámaras públicas organizadas por categoría, pensado como herramienta de investigación OSINT.',
    highlights: ['Catálogo OSINT de cámaras públicas por categoría'],
  },
  'Downloader': {
    tagline: 'Descarga y conversión multimedia',
    stack: ['Aplicación web propia', 'yt-dlp'],
    summary: 'Herramienta propia para descargar y convertir vídeo/audio desde múltiples plataformas.',
    highlights: ['Descarga y conversión multi-plataforma'],
  },
  'Hermes Agent': {
    tagline: 'Agente de IA en Docker',
    stack: ['Nous Research Hermes Agent', 'Docker', 'OpenRouter'],
    summary: 'Agente de inteligencia artificial open-source con capacidad de ejecutar código, gestionar archivos y operar como asistente técnico avanzado, conectado a más de 100 modelos de IA vía OpenRouter.',
    highlights: ['Asistente de IA con ejecución de código', 'Acceso a 100+ modelos vía OpenRouter'],
  },
  'SysReptor': {
    tagline: 'Plataforma de reportes de pentesting',
    stack: ['SysReptor', 'Docker'],
    summary: 'Plataforma open-source para documentar y generar reportes profesionales de pentesting y auditorías de forma colaborativa, con plantillas personalizables y exportación a PDF desde el navegador.',
    highlights: ['Generación de informes de pentest en PDF', 'Colaborativa y con plantillas propias'],
  },
  'WGDashboard': {
    tagline: 'Panel web de gestión WireGuard',
    stack: ['WGDashboard', 'Gunicorn'],
    summary: 'Interfaz web open-source para administrar visualmente la VPN WireGuard: peers, tráfico en tiempo real, generación de configuraciones y códigos QR.',
    highlights: ['Gestión visual de peers y tráfico VPN', 'Generación de configs y QR para nuevos dispositivos'],
  },
  'OracleControl Dashboard': {
    tagline: 'Panel de monitorización del VPS',
    stack: ['Python 3', 'Flask'],
    summary: 'Aplicación hermana de PiControl adaptada al VPS de Oracle Cloud: métricas en tiempo real y control visual de todos los servicios desplegados (SysReptor, WGDashboard, WireGuard, Hermes Agent, Fail2Ban...).',
    highlights: ['Métricas en tiempo real del VPS', 'Control centralizado de todos los servicios cloud'],
  },
  'Fail2Ban + F2B·Sentinel': {
    tagline: 'Protección + dashboard de seguridad',
    stack: ['Fail2Ban', 'Flask', 'Threat Intel feeds'],
    summary: 'Fail2Ban protege SSH y los servicios web del VPS contra fuerza bruta; F2B·Sentinel es un dashboard propio en Flask que visualiza en tiempo real las IPs bloqueadas, enriquecidas con geolocalización e inteligencia de amenazas. Acceso restringido exclusivamente a la VPN WireGuard.',
    highlights: ['Dashboard de amenazas con geolocalización', 'Acceso restringido solo a la VPN interna'],
  },
  'Blog Hacking — Writeups Service': {
    tagline: 'Servicio HTTPS de writeups',
    stack: ['Python3 HTTPS server'],
    summary: 'Instancia del blog de hacking servida directamente por HTTPS nativo de Python3 con certificado propio, sin pasar por Cloudflare, como servicio redundante del blog principal.',
    highlights: ['Servido con TLS nativo sin CDN de por medio'],
  },
  'GoodsRead': {
    tagline: 'Plataforma social de lectura',
    stack: ['Node.js 22', 'Express 4', 'SQLite + FTS5', 'systemd'],
    summary: 'Plataforma completa de lectura social: catálogo de libros que se sincroniza automáticamente con Google Books y Open Library, seguimiento de progreso página a página, y gamificación con niveles, rachas e insignias.',
    highlights: ['Sincronización automática con Google Books / Open Library', 'Gamificación completa: niveles, rachas, 18 insignias'],
  },
  'Saldo': {
    tagline: 'Gastos compartidos en tiempo real',
    stack: ['Python 3', 'Flask', 'SQLAlchemy', 'Socket.IO'],
    summary: 'Aplicación para gestionar gastos compartidos entre grupos de forma clara e instantánea, con actualizaciones en tiempo real vía WebSocket y arquitectura basada en Application Factory + Blueprints.',
    highlights: ['Actualizaciones en tiempo real con Socket.IO', 'Arquitectura Flask modular (Application Factory)'],
  },
  'Service Manager': {
    tagline: 'Portal de documentación de infraestructura',
    stack: ['Infrastructure Documentation Portal'],
    summary: 'Portal que centraliza el estado y la documentación de todos los servicios desplegados entre la Raspberry Pi, Oracle Cloud y la malla VPN, pensado como fuente única de verdad de la infraestructura.',
    highlights: ['Vista unificada de toda la infraestructura personal'],
  },
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
