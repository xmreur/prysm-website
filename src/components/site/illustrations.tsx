import * as React from 'react'

/**
 * Prysm — minimal, flat, Signal-style vector illustrations.
 * All artwork uses currentColor + the brand blue so it adapts to light/dark.
 */

const BLUE = 'var(--primary)'
const BLUE_SOFT = 'var(--accent)'
const MUTED = 'var(--muted-foreground)'
const BORDER = 'var(--border)'
const FG = 'var(--foreground)'

/* ----------------------------- Brand mark ----------------------------- */

export function PrysmMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="9" fill={BLUE} />
      {/* onion / concentric arcs */}
      <circle cx="16" cy="16" r="9" stroke="white" strokeWidth="1.6" opacity="0.55" />
      <circle cx="16" cy="16" r="5.5" stroke="white" strokeWidth="1.6" opacity="0.8" />
      <circle cx="16" cy="16" r="2" fill="white" />
    </svg>
  )
}

/* --------------------------- Chat mockup ------------------------------ */

export function ChatMockup({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 440"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
    >
      {/* phone frame */}
      <rect x="40" y="8" width="280" height="424" rx="38" fill="var(--card)" stroke={BORDER} strokeWidth="1.5" />
      <rect x="150" y="22" width="60" height="6" rx="3" fill={BORDER} />

      {/* header — peer name + encrypted lock badge */}
      <rect x="56" y="52" width="248" height="44" rx="12" fill={BLUE_SOFT} />
      <circle cx="80" cy="74" r="11" fill={BLUE} />
      <text x="100" y="72" fontSize="13" fontWeight="600" fill={FG}>Giulia</text>
      <text x="100" y="86" fontSize="10" fill={MUTED}>online</text>
      <circle cx="280" cy="74" r="12" fill={BLUE} fillOpacity="0.15" />
      <rect x="275" y="72" width="10" height="8" rx="1.6" fill={BLUE} />
      <path d="M277.5 72 v-1.6 a2.5 2.5 0 0 1 5 0 V72" stroke={BLUE} strokeWidth="1.3" fill="none" />

      {/* conversation — Giulia (received) & Marco (sent) */}

      {/* msg 1 — Giulia */}
      <text x="66" y="126" fontSize="10" fontWeight="600" fill={MUTED}>Giulia</text>
      <rect x="64" y="130" width="150" height="34" rx="14" fill={BLUE_SOFT} />
      <text x="76" y="151" fontSize="12" fill={FG}>hai provato prysm?</text>

      {/* msg 2 — Marco */}
      <text x="296" y="180" fontSize="10" fontWeight="600" fill={MUTED} textAnchor="end">Marco</text>
      <rect x="110" y="184" width="186" height="34" rx="14" fill={BLUE} />
      <text x="284" y="205" fontSize="12" fill="white" textAnchor="end">sì. zero server, su tor</text>

      {/* msg 3 — Giulia */}
      <text x="66" y="240" fontSize="10" fontWeight="600" fill={MUTED}>Giulia</text>
      <rect x="64" y="244" width="186" height="34" rx="14" fill={BLUE_SOFT} />
      <text x="76" y="265" fontSize="12" fill={FG}>e chi può leggere i msg?</text>

      {/* msg 4 — Marco */}
      <text x="296" y="300" fontSize="10" fontWeight="600" fill={MUTED} textAnchor="end">Marco</text>
      <rect x="138" y="304" width="158" height="34" rx="14" fill={BLUE} />
      <text x="284" y="325" fontSize="12" fill="white" textAnchor="end">nessuno. e2e cifrati</text>

      {/* input bar */}
      <rect x="56" y="370" width="248" height="44" rx="14" fill={BLUE_SOFT} />
      <circle cx="84" cy="392" r="11" fill={BLUE} opacity="0.18" />
      <path d="M78 392 h12 M84 386 v12" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <rect x="108" y="386" width="150" height="6" rx="3" fill={MUTED} opacity="0.7" />
      <circle cx="284" cy="392" r="13" fill={BLUE} />
      <path d="M278 392 l4 4 l8 -8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* --------------------------- Onion routing ---------------------------- */

export function OnionDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="180" cy="180" r="150" stroke={BORDER} strokeWidth="1.2" />
      <circle cx="180" cy="180" r="110" stroke={BORDER} strokeWidth="1.2" />
      <circle cx="180" cy="180" r="70" stroke={BORDER} strokeWidth="1.2" />

      {/* relay nodes on outer rings */}
      <circle cx="180" cy="30" r="9" fill={BLUE} />
      <circle cx="312" cy="220" r="9" fill={BLUE} opacity="0.8" />
      <circle cx="70" cy="240" r="9" fill={BLUE} opacity="0.65" />

      {/* connecting path (onion route) */}
      <path
        d="M180 39 C 250 120, 300 170, 312 220 C 250 240, 150 250, 70 240 C 110 200, 150 120, 180 180"
        stroke={BLUE}
        strokeWidth="1.6"
        strokeDasharray="4 5"
        fill="none"
        opacity="0.6"
      />

      {/* center origin */}
      <circle cx="180" cy="180" r="14" fill={BLUE} />
      <circle cx="180" cy="180" r="22" stroke={BLUE} strokeWidth="1.5" opacity="0.35" />

      {/* labels dots */}
      <circle cx="180" cy="30" r="3" fill="white" />
      <circle cx="312" cy="220" r="3" fill="white" />
      <circle cx="70" cy="240" r="3" fill="white" />
    </svg>
  )
}

/* --------------------------- P2P network mesh ------------------------- */

export function NetworkMesh({ className }: { className?: string }) {
  const nodes = [
    { x: 80, y: 90 },
    { x: 280, y: 70 },
    { x: 180, y: 180 },
    { x: 70, y: 270 },
    { x: 300, y: 280 },
    { x: 200, y: 320 },
  ]
  const edges = [
    [0, 1], [0, 2], [1, 2], [1, 4], [2, 3], [2, 4], [3, 5], [4, 5], [0, 3], [1, 5],
  ]
  return (
    <svg
      viewBox="0 0 360 380"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={BLUE}
          strokeWidth="1.3"
          opacity={0.35}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="16" fill={BLUE_SOFT} />
          <circle cx={n.x} cy={n.y} r="8" fill={BLUE} />
        </g>
      ))}
    </svg>
  )
}

/* --------------------------- Key / identity --------------------------- */

export function KeyIdentity({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* shield */}
      <path
        d="M180 50 L280 86 V180 C280 250 235 296 180 316 C125 296 80 250 80 180 V86 Z"
        fill={BLUE_SOFT}
        stroke={BLUE}
        strokeWidth="1.6"
      />
      {/* key inside */}
      <circle cx="158" cy="170" r="26" stroke={BLUE} strokeWidth="6" fill="none" />
      <rect x="178" y="166" width="64" height="8" rx="4" fill={BLUE} />
      <rect x="222" y="166" width="8" height="20" rx="2" fill={BLUE} />
      <rect x="234" y="166" width="8" height="16" rx="2" fill={BLUE} />
    </svg>
  )
}

/* --------------------------- Globe + shield --------------------------- */

export function GlobeShield({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="180" cy="180" r="120" stroke={BORDER} strokeWidth="1.4" fill={BLUE_SOFT} opacity="0.4" />
      {/* meridians */}
      <ellipse cx="180" cy="180" rx="48" ry="120" stroke={BORDER} strokeWidth="1.2" fill="none" />
      <ellipse cx="180" cy="180" rx="120" ry="48" stroke={BORDER} strokeWidth="1.2" fill="none" />
      <line x1="60" y1="180" x2="300" y2="180" stroke={BORDER} strokeWidth="1.2" />
      <line x1="180" y1="60" x2="180" y2="300" stroke={BORDER} strokeWidth="1.2" />

      {/* shield overlay */}
      <path
        d="M180 120 L244 142 V196 C244 232 218 256 180 268 C142 256 116 232 116 196 V142 Z"
        fill={BLUE}
      />
      <path
        d="M158 188 l16 16 l30 -32"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

/* --------------------------- How it works flow ------------------------ */

export function FlowDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* device 1 */}
      <rect x="20" y="56" width="88" height="88" rx="16" fill={BLUE_SOFT} stroke={BORDER} strokeWidth="1.3" />
      <rect x="34" y="70" width="60" height="8" rx="4" fill={MUTED} />
      <rect x="34" y="86" width="44" height="8" rx="4" fill={MUTED} opacity="0.6" />
      <circle cx="64" cy="118" r="10" fill={BLUE} />

      {/* arrow */}
      <path d="M120 100 H150" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <path d="M144 94 L150 100 L144 106" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* tor onion */}
      <circle cx="260" cy="100" r="44" stroke={BORDER} strokeWidth="1.3" fill={BLUE_SOFT} />
      <circle cx="260" cy="100" r="30" stroke={BLUE} strokeWidth="1.3" fill="none" opacity="0.6" />
      <circle cx="260" cy="100" r="16" stroke={BLUE} strokeWidth="1.3" fill="none" opacity="0.8" />
      <circle cx="260" cy="100" r="6" fill={BLUE} />

      {/* arrow */}
      <path d="M310 100 H340" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      <path d="M334 94 L340 100 L334 106" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* device 2 */}
      <rect x="350" y="56" width="88" height="88" rx="16" fill={BLUE_SOFT} stroke={BORDER} strokeWidth="1.3" />
      <rect x="364" y="70" width="60" height="8" rx="4" fill={MUTED} />
      <rect x="364" y="86" width="44" height="8" rx="4" fill={MUTED} opacity="0.6" />
      <circle cx="394" cy="118" r="10" fill={BLUE} />
    </svg>
  )
}
