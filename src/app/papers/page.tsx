import type { Metadata } from 'next'
import { readdir } from 'fs/promises'
import { join } from 'path'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { Container, Eyebrow } from '@/components/site/ui'

export const metadata: Metadata = {
  title: 'White Papers — Prysm',
  description:
    'Technical white papers detailing the architecture, cryptography, and protocols behind Prysm.',
}

type Paper = {
  filename: string
  title: string
}

const TITLE_MAP: Record<string, string> = {
  'Prysm_Architecture.pdf': 'Architecture Overview',
  'Prysm_Calls.pdf': 'Call Protocol',
  'Prysm_Cryptography.pdf': 'Cryptographic Primitives',
  'Prysm_Database.pdf': 'Database Design',
  'Prysm_Transport.pdf': 'Transport Layer',
}

function paperTitle(filename: string): string {
  return TITLE_MAP[filename] ?? filename.replace('.pdf', '').replace(/_/g, ' ')
}

async function getPapers(): Promise<Paper[]> {
  const dir = join(process.cwd(), 'download', 'papers')
  const entries = await readdir(dir, { withFileTypes: true })
  return entries
    .filter((e) => e.isFile() && e.name.endsWith('.pdf'))
    .map((e) => ({ filename: e.name, title: paperTitle(e.name) }))
}

export default async function PapersPage() {
  const papers = await getPapers()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <section className="border-b border-border py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>White Papers</Eyebrow>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                Technical white papers
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                In-depth technical documents covering the design, cryptography,
                and protocols that power Prysm.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl space-y-4">
              {papers.map((paper) => (
                <a
                  key={paper.filename}
                  href={`/api/papers/${paper.filename}`}
                  download={paper.filename}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30 hover:bg-primary/[0.02]"
                >
                  <div>
                    <h3 className="text-base font-semibold tracking-tight group-hover:text-primary">
                      {paper.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {paper.filename}
                    </p>
                  </div>
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-medium text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-primary">
                    PDF
                  </span>
                </a>
              ))}
            </div>

            {papers.length === 0 && (
              <p className="text-center text-muted-foreground">
                No papers available yet.
              </p>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
