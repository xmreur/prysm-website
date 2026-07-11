'use client'

import { Download, Github, Lock } from 'lucide-react'
import { Container, Reveal } from './ui'
import { ChatMockup } from './illustrations'

const STATS = [
  { value: '100%', label: 'Open Source' },
  { value: 'Zero', label: 'Raccolta dati' },
  { value: 'P2P', label: 'Architettura' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[480px] opacity-60"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, oklch(0.606 0.187 264 / 0.10) 0%, transparent 70%)',
        }}
      />

      <Container className="relative flex flex-col items-center pt-20 pb-16 text-center md:pt-28 md:pb-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <span className="prysm-dot inline-block h-2 w-2 rounded-full bg-primary" />
            Open source · Decentralizzato
          </span>
        </Reveal>

        <Reveal delay={80} as="h1">
          <span className="mt-7 block text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Messaggistica cifrata
            <br className="hidden sm:block" />{' '}
            di cui puoi fidarti
          </span>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Comunicazione peer-to-peer su Tor. Nessun server, nessuna
            sorveglianza, nessun metadato.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="https://github.com/xmreur/prysm/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
            >
              <Download className="h-5 w-5" />
              Scarica Prysm
            </a>
            <a
              href="https://github.com/xmreur/prysm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <Github className="h-5 w-5" />
              Codice su GitHub
            </a>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={320}>
          <dl className="mt-14 flex w-full max-w-2xl items-stretch justify-center divide-x divide-border rounded-2xl border border-border bg-card/50">
            {STATS.map((s) => (
              <div key={s.label} className="flex-1 px-4 py-5 text-center sm:px-8">
                <dt className="order-2 mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="order-1 text-2xl font-semibold tracking-tight md:text-3xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Chat mockup */}
        <Reveal delay={120} className="mt-16 w-full max-w-md md:mt-20">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 top-10 bottom-0 rounded-[3rem] bg-primary/10 blur-3xl"
            />
            <ChatMockup className="relative mx-auto w-full drop-shadow-xl" />
          </div>
        </Reveal>

        {/* privacy note */}
        <Reveal delay={200}>
          <p className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4 text-primary" />
            Crittografia end-to-end · Routing a cipolla su Tor
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
