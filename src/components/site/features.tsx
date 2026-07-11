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
    title: 'End-to-end encryption',
    desc: 'Messages are encrypted on your device and decrypted only when you open the chat. Nobody — not even us — can read them.',
    points: ['Modern end-to-end encryption', 'No access on our side', 'Key verification'],
    illustration: <ChatMockup className="w-full max-w-xs" />,
  },
  {
    icon: <Network className="h-5 w-5" />,
    title: 'Onion routing over Tor',
    desc: 'Multiple relay hops through the Tor network make tracking your communications mathematically impossible.',
    points: ['Anonymous transport', 'Metadata-resistant', 'No IP address exposed'],
    illustration: <OnionDiagram className="w-full max-w-xs" />,
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Peer-to-peer architecture',
    desc: 'Direct connections between users. No central servers means no single point of failure to attack.',
    points: ['No servers to hack', 'No company to subpoena', 'Conversations only between peers'],
    illustration: <NetworkMesh className="w-full max-w-xs" />,
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: 'Truly private identity',
    desc: 'Cryptographic keys instead of phone numbers or emails. Your identity is yours alone, and no one can link it to you.',
    points: ['.onion-based identities', 'No phone number required', 'No registration'],
    illustration: <KeyIdentity className="w-full max-w-xs" />,
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Censorship resistant',
    desc: 'Distributed architecture with no central point of failure. It cannot be blocked, intercepted, or shut down.',
    points: ['Bypasses firewalls', 'Works anywhere', 'Always available'],
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
    <section id="features" className="border-t border-border bg-background py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Prysm</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Privacy isn&apos;t an option
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            It&apos;s the foundation of every feature. Discover below why Prysm
            is a secure, simple, and effective messaging app.
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
