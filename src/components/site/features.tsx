'use client'

import * as React from 'react'
import { Lock, Network, Shield, KeyRound, Globe, Check } from 'lucide-react'
import { Container, Reveal, Eyebrow } from './ui'
import {
  ChatMockup,
  OnionDiagram,
  NetworkMesh,
  KeyIdentity,
  GlobeShield,
} from './illustrations'

type Feature = {
  icon: React.ReactNode
  title: string
  desc: string
  points: string[]
  illustration: React.ReactNode
}

const FEATURES: Feature[] = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: 'Crittografia end-to-end',
    desc: 'I messaggi vengono cifrati sul tuo dispositivo e decifrati solo quando apri la chat. Nessuno — nemmeno noi — può leggerli.',
    points: ['Crittografia RSA 4096 bit', 'Nessun accesso da parte nostra', 'Verifica delle chiavi'],
    illustration: <ChatMockup className="w-full max-w-xs" />,
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: 'Routing a cipolla su Tor',
    desc: 'Più hop di relay attraverso la rete Tor rendono il tracciamento delle tue comunicazioni matematicamente impossibile.',
    points: ['Trasporto anonimo', 'Resistente ai metadati', 'Nessun indirizzo IP esposto'],
    illustration: <OnionDiagram className="w-full max-w-xs" />,
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Architettura peer-to-peer',
    desc: 'Connessioni dirette tra utenti. Nessun server centrale significa nessun singolo punto di fallimento da attaccare.',
    points: ['Nessun server da hackerare', 'Nessuna azienda da citare', 'Conversazioni solo tra peer'],
    illustration: <NetworkMesh className="w-full max-w-xs" />,
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: 'Identità davvero privata',
    desc: 'Chiavi crittografiche al posto di numeri di telefono o email. La tua identità è solo tua, e nessuno può collegarla a te.',
    points: ['Identità basate su .onion', 'Nessun numero richiesto', 'Nessuna registrazione'],
    illustration: <KeyIdentity className="w-full max-w-xs" />,
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Resistente alla censura',
    desc: 'Architettura distribuita senza un punto centrale di fallimento. Non può essere bloccata, intercettata o spenta.',
    points: ['Superamento dei firewall', 'Funziona ovunque', 'Sempre disponibile'],
    illustration: <GlobeShield className="w-full max-w-xs" />,
  },
]

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const flip = index % 2 === 1
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      {/* illustration */}
      <Reveal
        className={flip ? 'md:order-2' : 'md:order-1'}
      >
        <div className="relative flex items-center justify-center rounded-3xl border border-border bg-card/40 px-6 py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-50"
            style={{
              background:
                'radial-gradient(50% 50% at 50% 40%, oklch(0.606 0.187 264 / 0.08) 0%, transparent 70%)',
            }}
          />
          <div className="relative">{feature.illustration}</div>
        </div>
      </Reveal>

      {/* text */}
      <Reveal delay={120} className={flip ? 'md:order-1' : 'md:order-2'}>
        <div className="flex flex-col items-start">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            {feature.icon}
          </span>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
            {feature.title}
          </h3>
          <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {feature.desc}
          </p>
          <ul className="mt-6 space-y-2.5">
            {feature.points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2.5 text-sm text-foreground/80"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}

export function Features() {
  return (
    <section id="funzionalita" className="border-t border-border bg-background py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Perché Prysm</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            La privacy non è un&apos;opzione
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            È il fondamento di ogni funzione. Scopri qui sotto i motivi per cui
            Prysm è un&apos;app di messaggistica sicura, semplice ed efficace.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.title} feature={f} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
