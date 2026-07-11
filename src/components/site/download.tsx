'use client'

import {
  Download,
  Github,
  MessageCircle,
  AlertCircle,
  Heart,
} from 'lucide-react'
import { Container, Reveal, Eyebrow } from './ui'

/* Discord brand icon (lucide has no brand icons) */
function Discord({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419z" />
    </svg>
  )
}

const COMMUNITY = [
  {
    icon: <MessageCircle className="h-4 w-4" />,
    label: 'Report issues',
    href: 'https://github.com/xmreur/prysm/issues',
  },
  {
    icon: <Discord className="h-4 w-4" />,
    label: 'Discord',
    href: 'https://discord.gg/rYDuctk47y',
  },
]

export function Download_() {
  return (
    <section id="download" className="border-t border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Download</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Get started with Prysm
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Download the latest release or contribute to the project. Everything
            is open source, always.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-5 md:grid-cols-2">
            {/* Download card */}
            <a
              href="https://github.com/xmreur/prysm/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Download className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                Download
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Get the latest release for your platform from GitHub Releases.
              </p>
              <span className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform group-hover:scale-[1.02]">
                <Download className="h-4 w-4" />
                Latest release
              </span>
            </a>

            {/* Source card */}
            <a
              href="https://github.com/xmreur/prysm"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground">
                <Github className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                Open source
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Explore the code, propose improvements, and contribute to
                development.
              </p>
              <span className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors group-hover:bg-accent">
                <Github className="h-4 w-4" />
                View on GitHub
              </span>
            </a>
          </div>
        </Reveal>

        {/* Active development note */}
        <Reveal delay={160}>
          <div className="mx-auto mt-6 flex max-w-3xl items-start gap-4 rounded-2xl border border-border bg-background p-6">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <h4 className="text-sm font-semibold">Active development</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Prysm is under active development. APIs may evolve as we refine
                the architecture. Stay up to date with releases and join the
                community.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Community */}
        <Reveal delay={200}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <h3 className="text-xl font-semibold tracking-tight">
              Join the community
            </h3>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {COMMUNITY.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  {c.icon}
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Support CTA */}
        <Reveal delay={240}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Heart className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-semibold tracking-tight">
              Support the project
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Prysm is free and open source. If you&apos;d like to support our
              work, donations are greatly appreciated.
            </p>
            <a
              href="/#support"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Support Prysm
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export { Download_ as DownloadSection }
