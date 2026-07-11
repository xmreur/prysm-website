'use client'

import * as React from 'react'
import { Copy, Check, Heart, ArrowUpRight } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import { Container, Reveal, Eyebrow } from './ui'

type Coin = {
  ticker: string
  name: string
  address: string
}

const COINS: Coin[] = [
  { ticker: 'BTC', name: 'Bitcoin', address: 'bc1qev0zu7rnske4ee7as0t4tyh56uv6v0ga62wx8r' },
  { ticker: 'SOL', name: 'Solana', address: '2S6tZNNUH5sPp9PqszQ4XK4MN44SvLCkTwNuCVvRvtEP' },
  { ticker: 'ETH', name: 'Ethereum', address: '0x2934955fe95059ea470E0B81519BA59432eFe77a' },
  { ticker: 'XRP', name: 'Ripple', address: 'rHfoRsLjXrbAqxa7nJcXz6XdxDZm8M3sJT' },
  { ticker: 'TON', name: 'Toncoin', address: 'UQDEeapruNlAmSt9j4J9CNiuasJbF3OlCxzTZPJiq6hzKOFu' },
  { ticker: 'LTC', name: 'Litecoin', address: 'ltc1qnsp6alkn2gzd4vpekya05l2caa3aqfmk9m7882' },
  { ticker: 'XMR', name: 'Monero', address: '47ndq7fCdW9jTGKtXafwMgDJjxAw3cnWwjR6eq31pfXXKfqNHXq5w4B2D49oTKnTHGCRCgcU6D24oiyUD8Ha7iEJLCPGJsC' },
]

function CoinRow({ coin }: { coin: Coin }) {
  const [copied, setCopied] = React.useState(false)

  const copy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(coin.address)
      setCopied(true)
      toast({ title: `${coin.ticker} copiato`, description: 'Indirizzo copiato negli appunti.' })
      setTimeout(() => setCopied(false), 1600)
    } catch {
      toast({ title: 'Copia non riuscita', description: 'Copia l\'indirizzo manualmente.' })
    }
  }, [coin])

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/30">
      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold tracking-wide text-primary">
        {coin.ticker}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{coin.name}</span>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {coin.ticker}
          </span>
        </div>
        <p className="mt-0.5 truncate font-mono text-xs text-muted-foreground">
          {coin.address}
        </p>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copia indirizzo ${coin.ticker}`}
        className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}

export function Support() {
  return (
    <section id="supporto" className="border-t border-border bg-background py-20 md:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Supporta</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Sostieni Prysm
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            La nostra app è gratuita, ma se vuoi supportare il nostro lavoro le
            donazioni sono molto apprezzate. Ogni contributo ci aiuta a
            migliorare Prysm.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-muted/30 p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-2 px-2 pt-1">
              <Heart className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Indirizzi per le donazioni
              </h3>
            </div>
            <div className="prysm-scroll grid max-h-[28rem] gap-3 overflow-y-auto p-1 sm:grid-cols-2">
              {COINS.map((c) => (
                <CoinRow key={c.ticker} coin={c} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-1.5 text-center text-sm text-muted-foreground">
            Prysm è indipendente e no-profit.
            <a
              href="https://github.com/xmreur/prysm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-medium text-primary hover:underline"
            >
              Vedi il progetto <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
