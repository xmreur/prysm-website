'use client'

import { Smartphone, Server, KeyRound, Code2, ArrowRight } from 'lucide-react'
import { Container, Reveal, Eyebrow } from './ui'

const STACK = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Flutter',
    desc: 'Interfaccia multipiattaforma per Windows, macOS e Linux.',
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: 'Protocollo Tor',
    desc: 'Trasporto anonimo e routing a cipolla per ogni connessione.',
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: 'Chiavi crittografiche',
    desc: 'Identità P2P basate su .onion e crittografia end-to-end moderna.',
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: 'Codice nativo',
    desc: 'Integrazione Swift e Kotlin per il mobile (in arrivo).',
  },
]

const ROADMAP = [
  'Mobile TOR embedding',
  'Messaggistica di gruppo',
  'Supporto foto e video',
  'Invio di file',
]

export function Technology() {
  return (
    <section id="tecnologia" className="border-t border-border bg-background py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Tecnologia</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Costruito con tecnologie moderne
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Crittografia all&apos;avanguardia e protocolli collaudati lavorano
            insieme per la tua privacy.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STACK.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40 hover:bg-accent/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {s.icon}
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-muted/30 p-8">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              <h3 className="text-base font-semibold tracking-tight">
                Sulla roadmap
              </h3>
            </div>
            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {ROADMAP.map((r) => (
                <div
                  key={r}
                  className="flex items-center gap-3 text-sm text-foreground/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {r}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
