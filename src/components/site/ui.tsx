'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Reveal — a lightweight pass-through wrapper.
 *
 * Signal.org keeps its pages static and calm (no scroll-triggered
 * animations), so we deliberately avoid hiding content with opacity:0
 * by default. This keeps every section visible for full-page captures,
 * SEO crawlers, no-JS sessions and accessibility — while still allowing
 * a quiet entrance for the hero via the optional `animate` prop.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  animate = false,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  animate?: boolean
  as?: React.ElementType
}) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [visible, setVisible] = React.useState(!animate)

  React.useEffect(() => {
    if (!animate) return
    const el = ref.current
    if (!el) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [animate])

  return (
    <Tag
      ref={ref as never}
      className={cn(animate && 'prysm-reveal', animate && visible && 'is-visible', className)}
      style={animate ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

/* Container — centered max width with responsive gutters. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-6 md:px-8', className)}>
      {children}
    </div>
  )
}

/* Eyebrow — small uppercase label above section titles. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </span>
  )
}
