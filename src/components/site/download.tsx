'use client'

import {
  Download,
  Github,
  MessageCircle,
  FileText,
  AlertCircle,
  Heart,
} from 'lucide-react'
import { Container, Reveal, Eyebrow } from './ui'

const COMMUNITY = [
  {
    icon: <MessageCircle className="h-4 w-4" />,
    label: 'Segnala problemi',
    href: 'https://github.com/xmreur/prysm/issues',
  },
  {
    icon: <MessageCircle className="h-4 w-4" />,
    label: 'Discussioni',
    href: 'https://github.com/xmreur/prysm/discussions',
  },
  {
    icon: <FileText className="h-4 w-4" />,
    label: 'Contribuire',
    href: 'https://github.com/xmreur/prysm/blob/main/CONTRIBUTING.md',
  },
]

export function Download_() {
  return (
    <section id="scarica" className="border-t border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Scarica</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Inizia con Prysm
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Scarica l&apos;ultima versione o contribuisci al progetto. Tutto è
            open source, sempre.
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
                Scarica
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Ottieni l&apos;ultima versione per la tua piattaforma da GitHub
                Releases.
              </p>
              <span className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform group-hover:scale-[1.02]">
                <Download className="h-4 w-4" />
                Ultima release
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
                Esplora il codice, proponi miglioramenti e contribuisci allo
                sviluppo.
              </p>
              <span className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors group-hover:bg-accent">
                <Github className="h-4 w-4" />
                Vedi su GitHub
              </span>
            </a>
          </div>
        </Reveal>

        {/* Active development note */}
        <Reveal delay={160}>
          <div className="mx-auto mt-6 flex max-w-3xl items-start gap-4 rounded-2xl border border-border bg-background p-6">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <div>
              <h4 className="text-sm font-semibold">Sviluppo attivo</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Prysm è in sviluppo attivo. Le API potrebbero evolversi mentre
                raffiniamo l&apos;architettura. Resta aggiornato con le release e
                unisciti alla community.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Community */}
        <Reveal delay={200}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <h3 className="text-xl font-semibold tracking-tight">
              Unisciti alla community
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
              Supporta il progetto
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Prysm è gratuito e open source. Se vuoi sostenere il nostro lavoro,
              le donazioni sono molto apprezzate.
            </p>
            <a
              href="#supporto"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Sostieni Prysm
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export { Download_ as DownloadSection }
