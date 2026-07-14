'use client'

import { Smartphone, Server, KeyRound, Code2, ArrowRight } from 'lucide-react'
import { Container, Reveal, Eyebrow } from './ui'

const STACK = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: 'Flutter',
    desc: 'Cross-platform UI for Windows, macOS, and Linux.',
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: 'Tor Protocol',
    desc: 'Anonymous transport and onion routing for every connection.',
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: 'Cryptographic keys',
    desc: '.onion-based P2P identities and modern end-to-end encryption.',
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: 'Native code',
    desc: 'Swift and Kotlin integration for mobile (coming soon).',
  },
]

const ROADMAP = [
  'Mac/iOS support',
  'More UI customization',
  'Group calls',
  'Stabilization',
  'Self hostable relays',
]

export function Technology() {
  return (
    <section id="technology" className="border-t border-border bg-background py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Technology</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Built with modern technology
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            State-of-the-art cryptography and battle-tested protocols working
            together for your privacy.
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
                On the roadmap
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
