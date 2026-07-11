'use client'

import * as React from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Container, Reveal, Eyebrow } from './ui'

/* --- inline glyphs so they share the exact size/center of the step --- */

function DeviceGlyph() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" aria-hidden="true">
      {/* phone */}
      <rect x="9" y="4" width="14" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="14" y1="24" x2="18" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function TorGlyph() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="7.5" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  )
}

const STEPS = [
  {
    glyph: <DeviceGlyph />,
    name: 'Il tuo dispositivo',
    sub: 'Cifri il messaggio',
  },
  {
    glyph: <TorGlyph />,
    name: 'Rete Tor',
    sub: 'Routing a cipolla',
  },
  {
    glyph: <DeviceGlyph />,
    name: 'Dispositivo del peer',
    sub: 'Decifra il messaggio',
  },
]

const TAGS = ['Anonimo', 'Cifrato', 'Diretto']

function StepColumn({
  step,
  index,
}: {
  step: (typeof STEPS)[number]
  index: number
}) {
  return (
    <div className="flex flex-1 flex-col items-center px-3 text-center">
      {/* icon — fixed size, perfectly centered */}
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm">
        {step.glyph}
      </div>
      <span className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="mt-1.5 text-sm font-semibold sm:text-base">{step.name}</span>
      <span className="mt-0.5 text-xs text-muted-foreground">{step.sub}</span>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section
      id="come-funziona"
      className="border-t border-border bg-muted/30 py-20 md:py-28"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Come funziona</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            End-to-end incontra il routing a cipolla
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            I messaggi viaggiano direttamente tra i peer, senza intermediari.
            La crittografia avviene sul tuo dispositivo, il trasporto avviene su
            Tor.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="mx-auto max-w-3xl">
            {/* unified flow: icon + arrow + icon + arrow + icon, text under each */}
            <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-start md:gap-0">
              {STEPS.map((step, i) => (
                <React.Fragment key={step.name}>
                  <StepColumn step={step} index={i} />
                  {i < STEPS.length - 1 && (
                    /* arrow lives on the same row as the icons (h-20) so it
                       is vertically centered exactly on the icon center */
                    <div className="flex h-20 items-center justify-center text-primary md:px-1">
                      <ArrowRight className="hidden h-6 w-6 md:block" />
                      <ArrowDown className="h-6 w-6 md:hidden" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
