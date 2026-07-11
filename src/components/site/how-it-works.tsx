'use client'

import { Container, Reveal, Eyebrow } from './ui'
import { FlowDiagram } from './illustrations'

const STEPS = [
  { name: 'Il tuo dispositivo', sub: 'Cifri il messaggio' },
  { name: 'Rete Tor', sub: 'Routing a cipolla' },
  { name: 'Dispositivo del peer', sub: 'Decifra il messaggio' },
]

const TAGS = ['Anonimo', 'Cifrato', 'Diretto']

export function HowItWorks() {
  return (
    <section id="come-funziona" className="border-t border-border bg-muted/30 py-20 md:py-28">
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
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <div className="w-full max-w-2xl">
              <FlowDiagram className="w-full" />
            </div>

            <div className="mt-8 grid w-full max-w-2xl grid-cols-3 gap-4">
              {STEPS.map((s, i) => (
                <div
                  key={s.name}
                  className="flex flex-col items-center text-center"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-1.5 text-sm font-semibold sm:text-base">
                    {s.name}
                  </span>
                  <span className="mt-0.5 text-xs text-muted-foreground">
                    {s.sub}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
