import type { Metadata } from 'next'
import { Github, ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { Container, Eyebrow } from '@/components/site/ui'

export const metadata: Metadata = {
  title: 'Team — Prysm',
  description:
    'Le persone dietro Prysm: sviluppatori e tester che costruiscono un messenger peer-to-peer su Tor, open source e decentralizzato.',
}

/* ------------------------------------------------------------------ *
 *  TEAM DATA
 *  Sostituisci i placeholder con gli username reali del team.
 *  Per ogni membro puoi impostare:
 *    - username: handle (senza @)
 *    - role:     ruolo mostrato sotto il nome
 *    - github:   URL profilo GitHub (opzionale — se assente, niente link)
 * ------------------------------------------------------------------ */

type Member = {
  username: string
  role: string
  github?: string
}

const DEVS: Member[] = [
  {
    username: 'xmreur',
    role: 'Maintainer',
    github: 'https://github.com/xmreur',
  },
  // TODO: sostituisci i placeholder con gli username reali
  { username: 'dev-1', role: 'Sviluppatore' },
  { username: 'dev-2', role: 'Sviluppatore' },
]

const TESTERS: Member[] = [
  // TODO: sostituisci i placeholder con gli username reali
  { username: 'tester-1', role: 'Tester' },
  { username: 'tester-2', role: 'Tester' },
]

/* ------------------------------- helpers ---------------------------- */

function initials(username: string): string {
  const clean = username.replace(/[^a-zA-Z0-9]/g, '')
  return (clean.slice(0, 2) || '?').toUpperCase()
}

/* ------------------------------ member card ------------------------- */

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30">
      {/* avatar */}
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-semibold tracking-tight text-primary-foreground">
        {initials(member.username)}
      </span>

      {/* username */}
      <span className="mt-4 text-base font-semibold tracking-tight">
        @{member.username}
      </span>

      {/* role */}
      <span className="mt-1 text-sm text-muted-foreground">{member.role}</span>

      {/* github (optional) */}
      {member.github ? (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
        </a>
      ) : (
        <span className="mt-4 inline-flex h-4" aria-hidden="true" />
      )}
    </div>
  )
}

/* --------------------------- section heading ------------------------ */

function GroupHeading({
  title,
  desc,
}: {
  title: string
  desc: string
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">
        {desc}
      </p>
    </div>
  )
}

/* ------------------------------- the page --------------------------- */

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Team</Eyebrow>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                Le persone dietro Prysm
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                Un progetto open source e indipendente. Nessuna azienda, nessun
                investitore: solo persone che credono che la privacy sia un
                diritto, non un&apos;opzione.
              </p>
            </div>
          </Container>
        </section>

        {/* Members */}
        <section className="py-20 md:py-24">
          <Container>
            {/* Developers */}
            <GroupHeading
              title="Sviluppatori"
              desc="Chi scrive il codice di Prysm: crittografia, networking su Tor e interfaccia."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DEVS.map((m) => (
                <MemberCard key={m.username} member={m} />
              ))}
            </div>

            {/* Testers */}
            <div className="mt-20">
              <GroupHeading
                title="Tester"
                desc="Chi trova i bug prima che li trovi qualcun altro. Ogni segnalazione rende Prysm più solido."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {TESTERS.map((m) => (
                  <MemberCard key={m.username} member={m} />
                ))}
              </div>
            </div>

            {/* Contribute CTA */}
            <div className="mt-20 flex flex-col items-center gap-4 rounded-3xl border border-border bg-muted/30 p-8 text-center md:p-12">
              <h3 className="text-2xl font-semibold tracking-tight">
                Vuoi unirti al team?
              </h3>
              <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Prysm è open source: chiunque può contribuire con codice, test,
                traduzioni o segnalazioni. Trova il tuo posto nel progetto.
              </p>
              <a
                href="https://github.com/xmreur/prysm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Contribuisci su GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
