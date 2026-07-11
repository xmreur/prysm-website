'use client'

import * as React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Github } from 'lucide-react'
import { PrysmMark } from './illustrations'
import { Container } from './ui'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/#funzionalita', label: 'Funzionalità' },
  { href: '/#come-funziona', label: 'Come funziona' },
  { href: '/#tecnologia', label: 'Tecnologia' },
  { href: '/#confronto', label: 'Confronto' },
  { href: '/team', label: 'Team' },
  { href: '/#scarica', label: 'Scarica' },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-background'
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-18">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <PrysmMark className="h-8 w-8" />
          <span className="text-[1.15rem] font-semibold tracking-tight">Prysm</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Cambia tema"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {mounted && resolvedTheme === 'dark' ? (
              <Sun className="h-[1.1rem] w-[1.1rem]" />
            ) : (
              <Moon className="h-[1.1rem] w-[1.1rem]" />
            )}
          </button>

          <a
            href="https://github.com/xmreur/prysm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
          >
            <Github className="h-[1.1rem] w-[1.1rem]" />
          </a>

          <a
            href="/#scarica"
            className="ml-1 hidden items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex"
          >
            Scarica Prysm
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Apri menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <Container className="flex flex-col gap-1 pb-5 pt-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#scarica"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
            >
              Scarica Prysm
            </a>
            <a
              href="https://github.com/xmreur/prysm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-base font-medium text-foreground"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}
