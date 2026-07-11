import type { Metadata } from 'next'
import { Github, ArrowUpRight, Crown } from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { Container, Eyebrow } from '@/components/site/ui'

export const metadata: Metadata = {
  title: 'Team — Prysm',
  description:
    'The people behind Prysm: developers and testers building a peer-to-peer messenger over Tor, open source and decentralized.',
}

/* ------------------------------------------------------------------ *
 *  TEAM DATA
 *  The first entry in DEVS is rendered as the featured "lead" card.
 * ------------------------------------------------------------------ */

type Member = {
  username: string
  role: string
  github?: string
  avatar?: string
}

const DEVS: Member[] = [
  {
    username: 'xmreur',
    role: 'Lead Developer & Creator',
    github: 'https://github.com/xmreur',
    avatar: '/team/xmreur.jpeg',
  },
  { username: 'ClayRootKit', role: 'Developer' },
  { username: 'mrbuondi', role: 'Developer' },
]

const TESTERS: Member[] = [
  { username: 'bunbuny', role: 'Tester', avatar: '/team/bunbuny.jpg' },
]

/* ------------------------------- helpers ---------------------------- */

function initials(username: string): string {
  const clean = username.replace(/[^a-zA-Z0-9]/g, '')
  return (clean.slice(0, 2) || '?').toUpperCase()
}

/* ------------------------------- avatar ----------------------------- */

function Avatar({
  username,
  avatar,
  size = 'md',
}: {
  username: string
  avatar?: string
  size?: 'md' | 'lg'
}) {
  const dims = size === 'lg' ? 'h-24 w-24 text-2xl' : 'h-16 w-16 text-xl'
  if (avatar) {
    return (
      <span
        className={`relative flex ${dims} flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary shadow-sm`}
      >
        <img
          src={avatar}
          alt={`@${username}`}
          className="h-full w-full object-cover"
        />
      </span>
    )
  }
  return (
    <span
      className={`flex ${dims} items-center justify-center rounded-full bg-primary font-semibold tracking-tight text-primary-foreground`}
    >
      {initials(username)}
    </span>
  )
}

/* --------------------------- github link bit ------------------------ */

function GithubLink({ href }: { href?: string }) {
  if (!href) return <span className="mt-4 inline-flex h-4" aria-hidden="true" />
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
    >
      <Github className="h-3.5 w-3.5" />
      GitHub
    </a>
  )
}

/* --------------------------- featured lead card --------------------- */

function LeadCard({ member }: { member: Member }) {
  return (
    <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center sm:flex-row sm:items-center sm:text-left md:p-10">
      {/* soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-50"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, oklch(0.606 0.187 264 / 0.18) 0%, transparent 70%)',
        }}
      />

      {/* avatar */}
      <Avatar username={member.username} avatar={member.avatar} size="lg" />

      {/* text */}
      <div className="relative flex flex-col items-center sm:items-start">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
          <Crown className="h-3 w-3" />
          Lead
        </span>
        <span className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
          @{member.username}
        </span>
        <span className="mt-1 text-sm text-muted-foreground md:text-base">
          {member.role}
        </span>
        <div className="mt-4">
          <GithubLink href={member.github} />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------ member card ------------------------- */

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/30">
      {/* avatar */}
      <Avatar username={member.username} avatar={member.avatar} />

      {/* username */}
      <span className="mt-4 text-base font-semibold tracking-tight">
        @{member.username}
      </span>

      {/* role */}
      <span className="mt-1 text-sm text-muted-foreground">{member.role}</span>

      {/* github (optional) */}
      <div className="mt-4">
        <GithubLink href={member.github} />
      </div>
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
  const [lead, ...restDevs] = DEVS

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
                The people behind Prysm
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                An open source, independent project. No company, no investors:
                just people who believe privacy is a right, not an option.
              </p>
            </div>
          </Container>
        </section>

        {/* Members */}
        <section className="py-20 md:py-24">
          <Container>
            {/* Developers */}
            <GroupHeading
              title="Developers"
              desc="The people writing Prysm's code: cryptography, Tor networking, and the interface."
            />

            {/* Lead — featured */}
            <div className="mt-10">
              <LeadCard member={lead} />
            </div>

            {/* Other developers */}
            {restDevs.length > 0 && (
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {restDevs.map((m) => (
                  <MemberCard key={m.username} member={m} />
                ))}
              </div>
            )}

            {/* Testers */}
            <div className="mt-20">
              <GroupHeading
                title="Testers"
                desc="The people who find bugs before anyone else does. Every report makes Prysm stronger."
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
                Want to join the team?
              </h3>
              <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Prysm is open source: anyone can contribute code, testing,
                translations, or reports. Find your place in the project.
              </p>
              <a
                href="https://github.com/xmreur/prysm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Contribute on GitHub
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
