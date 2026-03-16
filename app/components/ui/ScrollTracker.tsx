'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

const SCROLL_THRESHOLDS = [25, 50, 75, 100] as const

export default function ScrollTracker() {
  const sentRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      if (docHeight <= 0) {
        return
      }

      const depth = Math.round((scrollTop / docHeight) * 100)

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (depth >= threshold && !sentRef.current.has(threshold)) {
          sentRef.current.add(threshold)
          trackEvent('scroll_depth', { depth: threshold })
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
