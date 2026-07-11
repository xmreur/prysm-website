'use client'

import * as React from 'react'
import { Check, Minus, X } from 'lucide-react'
import { Container, Reveal, Eyebrow } from './ui'
import { cn } from '@/lib/utils'

/* ----------------------------- data model ----------------------------- */

type Rating = 'good' | 'partial' | 'bad'

type Cell = {
  rating: Rating
  label: string
}

type Row = {
  criterion: string
  cells: [Cell, Cell, Cell, Cell] // Prysm, WhatsApp, Telegram, Signal
}

const APPS = ['Prysm', 'WhatsApp', 'Telegram', 'Signal'] as const

const ROWS: Row[] = [
  {
    criterion: 'Open Source',
    cells: [
      { rating: 'good', label: '100%' },
      { rating: 'bad', label: 'No' },
      { rating: 'partial', label: 'Partial' },
      { rating: 'good', label: 'Yes' },
    ],
  },
  {
    criterion: 'Decentralized (P2P)',
    cells: [
      { rating: 'good', label: 'Yes' },
      { rating: 'bad', label: 'No' },
      { rating: 'bad', label: 'No' },
      { rating: 'bad', label: 'No' },
    ],
  },
  {
    criterion: 'Onion Routing (Tor)',
    cells: [
      { rating: 'good', label: 'Yes' },
      { rating: 'bad', label: 'No' },
      { rating: 'bad', label: 'No' },
      { rating: 'bad', label: 'No' },
    ],
  },
  {
    criterion: 'E2E Encryption',
    cells: [
      { rating: 'good', label: 'Always' },
      { rating: 'good', label: 'Default' },
      { rating: 'partial', label: 'Optional' },
      { rating: 'good', label: 'Always' },
    ],
  },
  {
    criterion: 'Phone number required',
    cells: [
      { rating: 'good', label: 'No' },
      { rating: 'bad', label: 'Yes' },
      { rating: 'bad', label: 'Yes' },
      { rating: 'bad', label: 'Yes' },
    ],
  },
  {
    criterion: 'Metadata protection',
    cells: [
      { rating: 'good', label: 'Tor' },
      { rating: 'bad', label: 'No' },
      { rating: 'bad', label: 'No' },
      { rating: 'partial', label: 'Partial' },
    ],
  },
  {
    criterion: 'Central servers',
    cells: [
      { rating: 'good', label: 'None' },
      { rating: 'bad', label: 'Meta' },
      { rating: 'bad', label: 'Telegram' },
      { rating: 'bad', label: 'Signal Fdn.' },
    ],
  },
  {
    criterion: 'Data collection',
    cells: [
      { rating: 'good', label: 'Zero' },
      { rating: 'bad', label: 'Extensive' },
      { rating: 'partial', label: 'Limited' },
      { rating: 'good', label: 'Minimal' },
    ],
  },
  {
    criterion: 'Censorship immunity',
    cells: [
      { rating: 'good', label: 'Yes' },
      { rating: 'bad', label: 'No' },
      { rating: 'partial', label: 'Partial' },
      { rating: 'partial', label: 'Partial' },
    ],
  },
]

/* ------------------------------ rating icon --------------------------- */

function RatingIcon({ rating }: { rating: Rating }) {
  if (rating === 'good') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="h-3 w-3" strokeWidth={3.5} />
      </span>
    )
  }
  if (rating === 'partial') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-muted-foreground/50 bg-muted-foreground/15 text-muted-foreground">
        <Minus className="h-2.5 w-2.5" strokeWidth={3.5} />
      </span>
    )
  }
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-border text-muted-foreground/60">
      <X className="h-2.5 w-2.5" strokeWidth={3.5} />
    </span>
  )
}

/* ------------------------------- legend ------------------------------- */

function Legend() {
  const items: { rating: Rating; text: string }[] = [
    { rating: 'good', text: 'Yes / complete' },
    { rating: 'partial', text: 'Partial' },
    { rating: 'bad', text: 'No / absent' },
  ]
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
      {items.map((it) => (
        <span key={it.text} className="inline-flex items-center gap-2">
          <RatingIcon rating={it.rating} />
          {it.text}
        </span>
      ))}
    </div>
  )
}

/* ------------------------------ the table ----------------------------- */

export function Comparison() {
  return (
    <section
      id="comparison"
      className="border-t border-border bg-background py-20 md:py-28"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Comparison</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            How Prysm compares
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Traditional messengers compromise your privacy. Prysm&apos;s
            architecture puts you back in control.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="overflow-x-auto prysm-scroll">
            <table className="w-full min-w-[640px] border-separate border-spacing-0">
              {/* header */}
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky left-0 z-10 bg-background/95 px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur sm:px-5"
                  >
                    Security model
                  </th>
                  {APPS.map((app, i) => (
                    <th
                      key={app}
                      scope="col"
                      className={cn(
                        'px-3 py-4 text-center align-bottom sm:px-5',
                        i === 0
                          ? 'rounded-t-2xl border-x border-t border-primary/25 bg-primary/5'
                          : 'border-b border-border'
                      )}
                    >
                      <span
                        className={cn(
                          'block text-sm font-semibold tracking-tight sm:text-base',
                          i === 0 ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        {app}
                      </span>
                      {i === 0 && (
                        <span className="mt-1 inline-block rounded-full bg-primary/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-primary">
                          P2P
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* body */}
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr key={row.criterion}>
                    {/* criterion (sticky left) */}
                    <th
                      scope="row"
                      className="sticky left-0 z-10 border-b border-border bg-background/95 px-4 py-4 text-left text-sm font-medium text-foreground backdrop-blur sm:px-5"
                    >
                      {row.criterion}
                    </th>

                    {row.cells.map((cell, ci) => {
                      const isPrysm = ci === 0
                      const isLast = ri === ROWS.length - 1
                      return (
                        <td
                          key={ci}
                          className={cn(
                            'px-3 py-4 text-center align-middle sm:px-5',
                            isPrysm
                              ? cn(
                                  'border-x border-primary/25 bg-primary/5',
                                  isLast && 'rounded-b-2xl border-b'
                                )
                              : 'border-b border-border'
                          )}
                        >
                          <div className="flex flex-col items-center gap-1.5">
                            <RatingIcon rating={cell.rating} />
                            <span
                              className={cn(
                                'text-xs sm:text-sm',
                                isPrysm
                                  ? 'font-semibold text-foreground'
                                  : 'text-muted-foreground'
                              )}
                            >
                              {cell.label}
                            </span>
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* legend */}
          <div className="mt-8">
            <Legend />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
