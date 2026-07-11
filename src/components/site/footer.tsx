'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'
import { PrysmMark } from './illustrations'
import { Container } from './ui'

const COLUMNS = [
  {
    title: 'Project',
    links: [
      { label: 'GitHub', href: 'https://github.com/xmreur/prysm' },
      { label: 'Releases', href: 'https://github.com/xmreur/prysm/releases' },
      { label: 'Issues', href: 'https://github.com/xmreur/prysm/issues' },
      { label: 'Discussions', href: 'https://github.com/xmreur/prysm/discussions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Contributing', href: 'https://github.com/xmreur/prysm/blob/main/CONTRIBUTING.md' },
      { label: 'Features', href: '/#features' },
      { label: 'How it works', href: '/#how-it-works' },
      { label: 'Technology', href: '/#technology' },
      { label: 'Team', href: '/team' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-6">
            <Link href="/" className="flex items-center gap-2.5">
              <PrysmMark className="h-8 w-8" />
              <span className="text-[1.15rem] font-semibold tracking-tight">
                Prysm
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A peer-to-peer messenger over Tor. No servers, no surveillance, no
              compromise. Open source and decentralized.
            </p>
            <a
              href="https://github.com/xmreur/prysm"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-[1.1rem] w-[1.1rem]" />
            </a>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        l.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Prysm. Open source under the MIT
            license. Built for those who defend privacy.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="prysm-dot inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            No ads · no tracking · no invasive cookies
          </p>
        </div>
      </Container>
    </footer>
  )
}
